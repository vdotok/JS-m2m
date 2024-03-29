import { UntypedFormGroup } from "@angular/forms";

export default class FormsHandler {
    static validateForm(form: UntypedFormGroup) {
        if (form.valid) {
            return true;
        } else {
            if (form.controls) {
                for (const field in form.controls) {
                    const control = form.get(field);
                    if (control.invalid) {
                        control.markAsTouched({ onlySelf: true });
                    }
                }
            }
            return false;
        }
    }
}