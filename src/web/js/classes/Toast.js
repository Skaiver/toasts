import {AbstractToast} from "./abstract/AbstractToast.js";

export class Toast extends AbstractToast {

    constructor(title, msg, icon, time_length_in_seconds) {
        if (!time_length_in_seconds) time_length_in_seconds = 3;
        super({title, msg, icon, time_length_in_seconds});
    }
}