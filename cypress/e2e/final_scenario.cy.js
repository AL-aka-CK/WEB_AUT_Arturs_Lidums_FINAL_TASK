import { ObjectPage } from "../pages/ObjectPage";

describe("Final Task", () => {
  it("Fills and submits the form", () => {
    ObjectPage.visit();

    ObjectPage.firstName.type("Arturs");
    ObjectPage.lastName.type("Lidums");
    ObjectPage.email.type("test@test.com");
    ObjectPage.genderMale.click();
    ObjectPage.mobile.type("1234567890");
    ObjectPage.dobInput.click();
    ObjectPage.monthSelect.select("February");
    ObjectPage.yearSelect.select("1930");
    cy.get(".react-datepicker__day--028:not(.react-datepicker__day--outside-month)").click();
    ObjectPage.subjectsInput.type("Economics{enter}");
    ObjectPage.hobbiesMusic.click();
    ObjectPage.uploadPicture.selectFile("cypress/files/japan_sunset.jpg");
    ObjectPage.state.click();
    cy.contains("NCR").click();
    ObjectPage.city.click();
    cy.contains("Delhi").click();
    ObjectPage.submitBtn.click();

    // validating
    ObjectPage.table.should("contain", "Arturs Lidums");
    ObjectPage.table.should("contain", "test@test.com");
    ObjectPage.table.should("contain", "Male");
    ObjectPage.table.should("contain", "1234567890");
    ObjectPage.table.should("contain", "28 February,1930");
    ObjectPage.table.should("contain", "Economics");
    ObjectPage.table.should("contain", "Music");
    ObjectPage.table.should("contain", "NCR Delhi");
  });
});