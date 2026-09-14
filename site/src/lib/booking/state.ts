export const steps = ["appointment", "provider", "time", "details", "confirm"] as const;
export type Step = typeof steps[number] | "complete";
export type Provider = "first-available" | "rowan-ellis";
export const providerNames: Record<Provider,string> = {"first-available":"First available", "rowan-ellis":"Rowan Ellis, PA-C"};
// A fixed sample week keeps the demonstration reproducible. These are not live dates.
export const availability = [
  {date:"2026-10-06",label:"Tuesday, October 6",times:["09:00","10:30","14:00"]},
  {date:"2026-10-07",label:"Wednesday, October 7",times:["09:00","11:00","15:00"]},
  {date:"2026-10-08",label:"Thursday, October 8",times:[]},
  {date:"2026-10-09",label:"Friday, October 9",times:["10:00","13:30","16:00"]},
  {date:"2026-10-10",label:"Saturday, October 10",times:["09:00","11:00"]},
] as const;
export type Details = { firstName:string;lastName:string;email:string;mobile:string;concern:string;accessRequest:string;smsDemoOptIn:boolean;demoAcknowledged:boolean };
export type BookingState = { step:Step; provider:Provider|null;date:string;time:string;details:Details };
export const emptyDetails: Details = {firstName:"",lastName:"",email:"",mobile:"",concern:"",accessRequest:"",smsDemoOptIn:false,demoAcknowledged:false};
export const initialState: BookingState = {step:"appointment",provider:null,date:"",time:"",details:{...emptyDetails}};
export function timesFor(date:string,provider:Provider|null): readonly string[] {
  const times:readonly string[]=availability.find(day=>day.date===date)?.times ?? [];
  return provider==="rowan-ellis" ? times.filter(time=>time!=="09:00") : times;
}
export function formatTime(time:string) { const [hour,minute]=time.split(":").map(Number);return `${hour%12||12}:${String(minute).padStart(2,"0")} ${hour>=12?"p.m.":"a.m."}`; }
export function dateLabel(date:string) { return availability.find(day=>day.date===date)?.label ?? "Choose a date"; }
export function hasSensitiveDetails(value:string) { return /\b(diagnos\w*|medication\w*|prescription\w*|cancer|diabetes|isotretinoin|accutane|pregnan\w*|mg\b|medical history)\b/i.test(value); }
export type Errors = Record<string,string>;
export function validateDetails(d:Details):Errors {
 const e:Errors={};
 if(!d.firstName.trim())e.firstName="Enter a first name.";
 if(!d.lastName.trim())e.lastName="Enter a last name.";
 if(!d.email.trim())e.email="Enter an email address.";
 else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim()))e.email="Enter an email in the format name@example.com.";
 const digits=d.mobile.replace(/\D/g,"").replace(/^1(?=\d{10}$)/,"");
 if(!d.mobile.trim())e.mobile="Enter a mobile number.";
 else if(digits.length!==10)e.mobile="Enter a 10-digit U.S. mobile number, including area code.";
 if(!d.demoAcknowledged)e.demoAcknowledged="Confirm that you understand this is a fictional demonstration.";
 if(d.accessRequest.length>300)e.accessRequest="Keep this request under 300 characters.";
 else if(hasSensitiveDetails(d.accessRequest))e.accessRequest="Keep medical details out of this demo. Remove health information before continuing.";
 return e;
}
export function validateStep(state:BookingState):Errors {
 if(state.step==="provider" && !state.provider)return {provider:"Choose a provider preference to continue."};
 if(state.step==="time") {
   if(!state.date)return {date:"Choose a date to continue."};
   if(!state.time)return {time:"Choose a time to continue."};
   if(!timesFor(state.date,state.provider).includes(state.time))return {time:"That demonstration time is no longer available. Choose another time to continue."};
 }
 if(state.step==="details" || state.step==="confirm")return validateDetails(state.details);
 return {};
}
export type Action = {type:"provider";value:Provider}|{type:"date";value:string}|{type:"time";value:string}|{type:"details";value:Partial<Details>}|{type:"next"}|{type:"back"}|{type:"edit";step:typeof steps[number]}|{type:"complete"}|{type:"reset"};
export function bookingReducer(state:BookingState,action:Action):BookingState {
 if(action.type==="reset")return {...initialState,details:{...emptyDetails}};
 if(state.step==="complete")return state;
 switch(action.type) {
  case "provider":return {...state,provider:action.value,date:"",time:""};
  case "date":return {...state,date:action.value,time:""};
  case "time":return {...state,time:action.value};
  case "details":return {...state,details:{...state.details,...action.value}};
  case "next": { if(Object.keys(validateStep(state)).length)return state;const i=steps.indexOf(state.step);return {...state,step:steps[Math.min(i+1,4)]}; }
  case "back":return {...state,step:steps[Math.max(0,steps.indexOf(state.step)-1)]};
  case "edit":return steps.indexOf(action.step)<steps.indexOf(state.step) ? {...state,step:action.step} : state;
  case "complete":return state.step==="confirm" && state.provider && timesFor(state.date,state.provider).includes(state.time) && !Object.keys(validateDetails(state.details)).length ? {...state,step:"complete",details:{...emptyDetails}} : state;
 }
}
