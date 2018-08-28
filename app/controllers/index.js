import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    headingMessage: "Comming soon",
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),
    emailAddress: '',
    actions:{
        saveInvitation() {
            var email = this.get('emailAddress');

            var newInvitation = this.store.createRecord('invitation', {
                email: email
            });

            newInvitation.save().then(response => {
                this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
                this.set('emailAddress', '');
            });
        }
    }
});
