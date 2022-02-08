import MailchimpSubscribe from "react-mailchimp-subscribe";
import { SchmoozSubscribeForm } from "./SchmoozSubscribeForm";

export function SignupForm() {
  return (
    <div>
      <MailchimpSubscribe
        url="https://app.us20.list-manage.com/subscribe/post?u=6f96ddef3e7d4a0e74013600a&id=7133eda1eb"
        render={({ subscribe, status, message }) => (
          <SchmoozSubscribeForm
            status={status}
            message={message}
            onValidated={(val: any) => {
              subscribe(val);
              console.log(val);
            }}
          />
        )}
      />
    </div>
  );
}

// <form action="https://app.us20.list-manage.com/subscribe/post" method="POST">
//     <input type="hidden" name="u" value="6f96ddef3e7d4a0e74013600a">
//     <input type="hidden" name="id" value="7133eda1eb"></input>

//        <div class="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
//             <label for="MERGE0">Email Address <span class="req asterisk">*</span></label>
//             <div class="field-group">
//                 <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">

//             </div>

//         </div>

//         <div class="mergeRow dojoDndItem mergeRow-radio" id="mergeRow-5">
//             <label for="MERGE5">What excites you about Schmooz? <span class="req asterisk">*</span></label>
//             <div class="field-group">
//                 <div class="interestgroup_field radio-group" id="MERGE5"> <label class="radio" for="MERGE5-0"><input type="radio" data-dojo-type="dijit/form/RadioButton" name="MERGE5" id="MERGE5-0" value="I want to engage my audience"  class="av-radio"><span>I want to engage my audience</span></label><label class="radio" for="MERGE5-1"><input type="radio" data-dojo-type="dijit/form/RadioButton" name="MERGE5" id="MERGE5-1" value="I want to Schmooz"  class="av-radio"><span>I want to Schmooz</span></label> </div>

//                 <div class="field-help">Would you prefer to host schmooz sessions (schmoozer) or join hosted sessions (user)?</div>

//             </div>

//         </div>
