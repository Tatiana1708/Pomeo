import * as EmailValidator from 'email-validator';
import moment from 'moment';

// export const nameIsValid = (name) => {
//     if(name.trim().length==0) return false;
//     return true;
// };

export const emailIsValid = (email) => {
    if(EmailValidator.validate(email)) return true;

    return false;
};

export const getAgeWithBirthdate = (birthdate) => { 
    //console.log(birthdate);
    let result = "";   
    if(birthdate===null || birthdate ==="") result = "18 ans au moins"; 
    else{
        let age = moment(birthdate, "DDMMYYYY").fromNow();
        let ageSplit = age.split(" ");
        result = ageSplit[0];

        if(typeof parseInt(ageSplit[0])!=="number" || ageSplit[0].includes("in")) result="";
        if(ageSplit[1]=="days") result += " jours";
        if(ageSplit[1]=="months") result += " mois";
        if(ageSplit[1]=="years") result += " ans";
    }    

    //console.log(result);
    return result;
};

export const getAgeWithBirthdateFull = (birthdate) => { 
    //console.log(birthdate);
    let result = "";   
    if(birthdate===null || birthdate ==="") result = "18 ans au moins"; 
    else{
        let age = moment(birthdate).fromNow();
        let ageSplit = age.split(" ");
        result = ageSplit[0];

        if(typeof parseInt(ageSplit[0])!=="number" || ageSplit[0].includes("in")) result="";
        if(ageSplit[1]=="days") result += " jours";
        if(ageSplit[1]=="months") result += " mois";
        if(ageSplit[1]=="years") result += " ans";
    }    

    //console.log(result);
    return result;
};