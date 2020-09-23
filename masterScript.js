(function () {
  function setReactData(selector, eventType, value) {
    const element = document.querySelector(selector);
    if (element.value) return;
    const event = new Event(eventType, {
      bubbles: true,
    });
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;

    nativeInputValueSetter.call(element, value);
    element.dispatchEvent(event);
  }

  function setRadioInput(selector) {
    const element = document.querySelector(selector);
    element.click();
  }

  function setTextarea(selector, eventType, value) {
    const element = document.querySelector(selector);
    if (element.value) return;
    const event = new Event(eventType, {
      bubbles: true,
    });
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      "value"
    ).set;
    nativeInputValueSetter.call(element, value);
    element.dispatchEvent(event);
  }

  function setReactSelectData(selector, eventType, identifier) {
    const element = document.querySelector(selector).previousElementSibling
      .children[0].children[1].children[0].children[0];
    const event = new Event(eventType, {
      bubbles: true,
    });
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;

    nativeInputValueSetter.call(element, identifier);
    element.dispatchEvent(event);
    const enterEvent = new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      keyCode: 13,
    });
    element.dispatchEvent(enterEvent);
  }

  function scriptChecker() {
    const interval = setInterval(() => {
      if (window.location.pathname.includes("/upload")) {
        ("prop upload");
        clearInterval(interval);
        runPropUploadScript();
        return;
      } else if (window.location.href.includes("app/background/references")) {
        ("references");
        clearInterval(interval);
        runReferenceScript();
        return;
      } else if (
        window.location.href.includes("app/background/residential/summary")
      ) {
        ("residential summary");
        return;
      } else if (window.location.href.includes("app/background/residential")) {
        clearInterval(interval);
        runResidentialScript();
        return;
      } else if (window.location.href.includes("app/background/employment")) {
        clearInterval(interval);
        runEmploymentScript();
        return;
      }
      ("else");
      return;
    }, 1000);
  }

  function runPropUploadScript() {
    const interval = setInterval(() => {
      ("interval");
      if (
        document.querySelector("input[name='address.postcode']") ||
        document.querySelector("input[name='summary']") ||
        document.querySelector("input[name='monthlyRent.amount']")
      ) {
        clearInterval(interval);
        document
          .querySelector("button[type='submit']")
          .addEventListener("click", scriptChecker);
        if (document.querySelector("input[name='address.postcode']"))
          runBasicsScript();
        else if (document.querySelector("input[name='summary']"))
          runDetailsScript();
        else if (document.querySelector("input[name='monthlyRent.amount']"))
          runTenancyScript();
        return;
      }
    }, 100);
  }

  function runBasicsScript() {
    setReactData("input[name='address.postcode']", "change", "ES1 1ES");
    setReactData(
      "input[name='address.buildingName']",
      "change",
      "Bank Building"
    );
    setReactData("input[name='address.streetNumber']", "change", "21");
    setReactData("input[name='address.flatNumber']", "change", "44");
    setReactData("input[name='address.county']", "change", "London");
    setReactData("input[name='address.street']", "change", "Bank st");
    setReactData("input[name='address.town']", "change", "London");
    setReactData("input[name='address.country']", "change", "GB");
  }
  function runDetailsScript() {
    setRadioInput("input[name='type']");
    setReactData("input[name='startDate']", "change", "05/08/2020");
    setRadioInput("input[name='furnishing']");
    setReactData(
      "input[name='summary']",
      "change",
      "A lovely one bedroom flat!"
    );
    setTextarea(
      "textarea[name='description']",
      "change",
      "Two bedroom apartment is located next to the Battersea park, close to Thames river. Apartment is partially furnished and is located on the 5th floor with beautiful views over the river and comprises of 2 large double ensuite bedrooms. Tube station is located only 5min walk from the apartment and bus station is just outside the entrance to the building."
    );
  }
  function runTenancyScript() {
    setReactData("input[name='monthlyRent.amount']", "change", "1000");
    setReactData("input[name='securityDeposit.amount']", "change", "1153.84");
    setReactData("input[name='holdingDeposit.amount']", "change", "230.76");
    setReactSelectData("input[name='rentFrequency']", "change", "Month");
    setReactSelectData("input[name='prefContractLength']", "change", "12");
  }

  function runReferenceScript() {
    const interval = setInterval(() => {
      ("interval");
      if (document.querySelector("input[name='title']")) {
        clearInterval(interval);
        const buttonTags = document.querySelectorAll("button");
        buttonTags.forEach((buttonTag) => {
          buttonTag.addEventListener("click", scriptChecker);
        });

        setReactSelectData("input[name='title']", "change", "mr");
        setReactSelectData("input[name='gender']", "change", "male");
        setReactSelectData("input[name='martialStatus']", "change", "single");
        setReactSelectData(
          "input[name='nationality']",
          "change",
          "united kingdom"
        );
        setReactSelectData(
          "input[name='postTenancyAddress.country']",
          "change",
          "united kingdom"
        );
        setReactSelectData(
          "input[name='kin.address.country']",
          "change",
          "united kingdom"
        );
        setReactData("input[name='firstname']", "change", "John");
        setReactData("input[name='lastname']", "change", "Smith");
        setReactData("input[name='dateOfBirth']", "change", "05/08/1998");
        setReactData("input[name='phone']", "change", "+441632960845");
        setReactData("input[name='dependants']", "change", "0");
        setReactData(
          "input[name='postTenancyAddress.postcode']",
          "change",
          "SW2 1AU"
        );
        setReactData(
          "input[name='postTenancyAddress.streetNumber']",
          "change",
          "35"
        );
        setReactData(
          "input[name='postTenancyAddress.street']",
          "change",
          "Talma Rd"
        );
        setReactData(
          "input[name='postTenancyAddress.town']",
          "change",
          "London"
        );
        setReactData(
          "input[name='postTenancyAddress.country']",
          "change",
          "GB"
        );
        setReactData("input[name='kin.address.postcode']", "change", "SW2 1AU");
        setReactData("input[name='kin.address.streetNumber']", "change", "35");
        setReactData("input[name='kin.address.street']", "change", "Talma Rd");
        setReactData("input[name='kin.address.town']", "change", "London");
        setReactData("input[name='kin.name']", "change", "Bill");
        setReactData("input[name='kin.relationship']", "change", "Father");
        setReactData(
          "input[name='kin.email']",
          "change",
          "bill.smith@gmail.com"
        );
        setReactData("input[name='kin.phone']", "change", "+441632960176");
      }
    }, 200);
  }

  function runResidentialScript() {
    const interval = setInterval(() => {
      ("interval");
      if (
        document.querySelector("input[name='locations[0].address.postcode']")
      ) {
        clearInterval(interval);

        const buttonTags = document.querySelectorAll("button");
        buttonTags.forEach((buttonTag) => {
          buttonTag.addEventListener("click", scriptChecker);
        });

        setReactSelectData(
          "input[name='locations[0].address.country']",
          "change",
          "united kingdom"
        );
        setReactData(
          "input[name='locations[0].address.postcode']",
          "change",
          "SW2 1AU"
        );
        setReactData(
          "input[name='locations[0].address.streetNumber']",
          "change",
          "35"
        );
        setReactData(
          "input[name='locations[0].address.street']",
          "change",
          "Talma Rd"
        );
        setReactData(
          "input[name='locations[0].address.town']",
          "change",
          "London"
        );
        setReactData(
          "input[name='locations[0].livedFor.from']",
          "change",
          "15/01/2020"
        );
        setReactSelectData(
          "input[name='locations[0].status']",
          "change",
          "Renting through same agent"
        );
        setReactData("input[name='locations[0].ref.name']", "change", "Jack");
        setReactData(
          "input[name='locations[0].ref.phone']",
          "change",
          "+441632960176"
        );
        setReactData(
          "input[name='locations[0].ref.email']",
          "change",
          "Jack@fortuneHouse.com"
        );
        setReactData(
          "input[name='locations[0].ref.address.postcode']",
          "change",
          "SW10 0RH"
        );
        setReactData(
          "input[name='locations[0].ref.address.streetNumber']",
          "change",
          "16"
        );
        setReactData(
          "input[name='locations[0].ref.address.street']",
          "change",
          "Pooles Ln"
        );
        setReactData(
          "input[name='locations[0].ref.address.town']",
          "change",
          "London"
        );
        setReactSelectData(
          "input[name='locations[0].ref.address.country']",
          "change",
          "united kingdom"
        );
        setReactSelectData(
          "input[name='locations[1].address.country']",
          "change",
          "united kingdom"
        );
        setReactData(
          "input[name='locations[1].address.postcode']",
          "change",
          "SW10 0SS"
        );
        setReactData(
          "input[name='locations[1].address.streetNumber']",
          "change",
          "52B"
        );
        setReactData(
          "input[name='locations[1].address.street']",
          "change",
          "Uverdale Rd"
        );
        setReactData(
          "input[name='locations[1].address.town']",
          "change",
          "London"
        );
        setReactData(
          "input[name='locations[1].livedFor.from']",
          "change",
          "01/07/2019"
        );
        setReactSelectData(
          "input[name='locations[1].status']",
          "change",
          "Renting through managing agent"
        );
        setReactData("input[name='locations[1].ref.name']", "change", "Jack");
        setReactData(
          "input[name='locations[1].ref.phone']",
          "change",
          "+441632960176"
        );
        setReactData(
          "input[name='locations[1].ref.email']",
          "change",
          "Jack@fortuneHouse.com"
        );
        setReactData(
          "input[name='locations[1].ref.address.postcode']",
          "change",
          "SW10 0RH"
        );
        setReactData(
          "input[name='locations[1].ref.address.streetNumber']",
          "change",
          "16"
        );
        setReactData(
          "input[name='locations[1].ref.address.street']",
          "change",
          "Pooles Ln"
        );
        setReactData(
          "input[name='locations[1].ref.address.town']",
          "change",
          "London"
        );
        setReactSelectData(
          "input[name='locations[1].ref.address.country']",
          "change",
          "united kingdom"
        );
      }
    }, 200);
  }

  function runEmploymentScript() {
    const interval = setInterval(() => {
      ("interval");
      if (document.querySelector("input[name='currentIncomeStatus']")) {
        clearInterval(interval);
        const buttonTags = document.querySelectorAll("button");
        buttonTags.forEach((buttonTag) => {
          buttonTag.addEventListener("click", scriptChecker);
        });

        setReactSelectData(
          "input[name='currentIncomeStatus']",
          "change",
          "employed"
        );
        setReactData(
          "input[name='currentEmployment.staffPayrollNo']",
          "change",
          "123456"
        );
        setReactSelectData(
          "input[name='currentEmployment.employment.type']",
          "change",
          "permanent"
        );
        setReactData(
          "input[name='currentEmployment.employment.companyName']",
          "change",
          "Bettr"
        );
        setReactData(
          "input[name='currentEmployment.employment.landline']",
          "change",
          "07123456789"
        );
        setReactData(
          "input[name='currentEmployment.employment.annually.amount']",
          "change",
          "30000"
        );
        setReactData(
          "input[name='currentEmployment.employment.position']",
          "change",
          "Front end developer"
        );
        setReactData(
          "input[name='currentEmployment.employment.commencement']",
          "change",
          "16/08/2018"
        );
        setReactData(
          "input[name='currentEmployment.employment.address.postcode']",
          "change",
          "SW1V 3QR"
        );
        setReactData(
          "input[name='currentEmployment.employment.address.streetNumber']",
          "change",
          "63"
        );
        setReactData(
          "input[name='currentEmployment.employment.address.street']",
          "change",
          "St.George's Square"
        );
        setReactData(
          "input[name='currentEmployment.employment.address.town']",
          "change",
          "London"
        );
        setReactSelectData(
          "input[name='currentEmployment.employment.address.country']",
          "change",
          "united kingdom"
        );
        setReactData(
          "input[name='currentEmployment.employment.employer.name']",
          "change",
          "Leam"
        );
        setReactData(
          "input[name='currentEmployment.employment.employer.surname']",
          "change",
          "Lane"
        );
        setReactData(
          "input[name='currentEmployment.employment.employer.positionAtCompany']",
          "change",
          "CTO"
        );
        setReactData(
          "input[name='currentEmployment.employment.employer.email']",
          "change",
          "Leam@bettr.com"
        );
        setReactData("input[name='savings.savings.amount']", "change", "0");
        setReactData("input[name='savings.investments.amount']", "change", "0");
        setReactData("input[name='savings.bonds.amount']", "change", "0");
        setReactData(
          "input[name='savings.propertySale.amount']",
          "change",
          "0"
        );
        setReactData(
          "input[name='savings.propertyRentals.amount']",
          "change",
          "0"
        );
        setReactData("input[name='savings.pension.amount']", "change", "0");
        setReactData(
          "input[name='savings.workingTaxCredits.amount']",
          "change",
          "0"
        );
        setReactData(
          "input[name='savings.benefitsUniversalCredit.amount']",
          "change",
          "0"
        );
      }
    }, 200);
  }

  scriptChecker();
})();
