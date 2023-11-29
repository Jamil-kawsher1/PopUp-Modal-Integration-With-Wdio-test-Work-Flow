import modalUtility from "./Util/modalUtility.js"

describe("Modal Integration", () => {



    it("Popup Modal Checker", async () => {





        await browser.url("https://bangla.bdnews24.com/")








        // // Output the selected value
        // console.log('User selected:', selectedValue);

        let answer = await modalUtility.showModal("Do You see Red Light????")

        console.log("Users ans is ", answer)

        await browser.pause(10000)


    })
})