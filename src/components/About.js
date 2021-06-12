import React from "react"

export default function About() {

  const SkillSpan = ({skill}) => {
    return (
      <span className="p-2 mr-3 mb-3 border-2 border-green rounded text-sm inline-block text-bodyText">{skill}</span>
    )
  }

  const AboutContent = () => {
    return (
      <div className="bg-white w-full p-6 rounded-md shadow-xl flex items-center flex-col md:flex-row">
        <div>
          <img className="w-40 h-40 object-cover rounded-full" src="https://lh3.googleusercontent.com/JuAmDQ5Kei4n_ZvVNeYlA8aQVCVSaYbdWyjwZTu1Z3cfPYfomVQtq6d8L5nFMQHbqTKw6AqcE3XDqXjES-zSDQh2D7rjZIN35YQgc6Gaq1KKGZiLo7j44NN5yqd1aLjoaySjd1CkgDro9o8GfxFz9B5Xl7_VQ6w0KlhE2tGmqv2u_5nuwxISdLP_nhSxRSd-m0TF5sjSP1KpxCHAwQsfkxnB7d5Vdhq38ftR2nGw4ochd-7l3V_DDUGyeRANyvJKJ4KIB8GmMhTj0aTqhZ-IfUg8SA3xP-Dvw-DiodT2vntoOSifvKaj6wACLITTs7t40TAZBA_f1CcwcZet1n16Izs0ZAAM0nWb_QWRvL9dR0tFujI84jrU6bgp469oTpxNcJGdoyhYWPaMJyoMIz-QlmT55DEm4QePKG9RsIW2TCBDOETU86_07b6Nm0WJ0YzNYdoEkTyesdb0ETxOHPq3Kxqy79_uYQ9yHu7nEKnipOhXW4UObzlOsqqt6dGeEkv-w4UVi8TqUcdUy60jFiEu-SmmBkGfTSbDMjSp1_HHJwvPWNeg40tYcs_kl1WxdUj-75Xf-f1NvSj2T3xaN8fKbhh79TaCFam6Bt3NPoJTYJDL7CMHv7Js3iEbUxw298j0sqLaYvnJhmhkQwPW_eYY_NlCEusk1JsfdpjAO2Ubz9vNASVKKWSJKCv19RgAeU6Be4CZW2UbOqrxgSF5cTFRHSbQ=w660-h880-no?authuser=0" alt="picture of myself"></img>
        </div>
        <div className="my-3"></div>
        <div>
          <div>
            <h5 className="text-bodyText font-semibold text-xl">Me:</h5>
            <p className="text-bodyText">Here's a bunch of text that will sum up just about everything you'll need to know about me.</p>
          </div>
          <div className="my-6"></div>
          <div>
            <h5 className="text-bodyText font-semibold text-xl">Bread and Butter:</h5>
            <div className="mt-3">
              <SkillSpan skill="HTML"/>
              <SkillSpan skill="CSS"/>
              <SkillSpan skill="JavaScript"/>
              <SkillSpan skill="React"/>
              <SkillSpan skill="Node"/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SectionTitle = () => {
    return (
      <div className="text-center">
        <h2 className="text-3xl text-primary font-medium">About</h2>
        <hr className="w-16 border-2 text-primary mx-auto mt-3 mb-9"></hr>
      </div>
    )
  }

  return (
    <div className="bg-section">
      <section className="section h-screen">
        <SectionTitle />
        <AboutContent />
      </section>
    </div>
  )
}