import Controller from '@ember/controller';
import { gte, match, not } from '@ember/object/computed';
import { computed, observer } from '@ember/object';

export default Controller.extend({
    emailAddress: "",
    message: "",
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isValidMessage: gte("message", 5),
    isDisabled: computed("isValid","isValidMessage", function(){
        return !(this.get("isValid") && this.get("isValidMessage"));
    })
});
