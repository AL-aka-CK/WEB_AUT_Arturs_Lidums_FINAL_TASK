export class ObjectPage {
    static visit() {
        cy.visit("https://demoqa.com/automation-practice-form");
    }
    static get firstName() { 
        return cy.get("#firstName");
    }
    static get lastName() { 
        return cy.get("#lastName"); 
    }
    static get email() { 
        return cy.get("#userEmail"); 
    }
    static get genderMale() { 
        return cy.contains("Male"); 
    }
    static get mobile() { 
        return cy.get("#userNumber"); 
    }
    static get dobInput() { 
        return cy.get("#dateOfBirthInput"); 
    }
    static get monthSelect() { 
        return cy.get(".react-datepicker__month-select"); 
    }
    static get yearSelect() { 
        return cy.get(".react-datepicker__year-select"); 
    }
    static get subjectsInput() { 
        return cy.get("#subjectsInput"); 
    }
    static get hobbiesMusic() { 
        return cy.contains("Music"); 
    }
    static get uploadPicture() { 
        return cy.get("#uploadPicture"); 
    }
    static get state() { 
        return cy.get("#state"); 
    }
    static get city() { 
        return cy.get("#city"); 
    }
    static get submitBtn() { 
        return cy.get("#submit"); 
    }
    static get table() { 
        return cy.get(".table-responsive"); 
    }
}