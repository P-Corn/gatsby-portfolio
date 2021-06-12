import React from "react"

export default function About() {

  const SkillSpan = ({skill}) => {
    return (
      <span className="p-2 mr-3 mb-3 border-2 border-green rounded text-sm inline-block text-bodyText">{skill}</span>
    )
  }

  const AboutContent = () => {
    return (
      <div className="bg-white w-full p-7 rounded-md shadow-2xl flex items-center flex-col md:flex-row">
        {/* <div>
          <img className="w-40 h-40 object-cover rounded-full" src="https://lh3.googleusercontent.com/JuAmDQ5Kei4n_ZvVNeYlA8aQVCVSaYbdWyjwZTu1Z3cfPYfomVQtq6d8L5nFMQHbqTKw6AqcE3XDqXjES-zSDQh2D7rjZIN35YQgc6Gaq1KKGZiLo7j44NN5yqd1aLjoaySjd1CkgDro9o8GfxFz9B5Xl7_VQ6w0KlhE2tGmqv2u_5nuwxISdLP_nhSxRSd-m0TF5sjSP1KpxCHAwQsfkxnB7d5Vdhq38ftR2nGw4ochd-7l3V_DDUGyeRANyvJKJ4KIB8GmMhTj0aTqhZ-IfUg8SA3xP-Dvw-DiodT2vntoOSifvKaj6wACLITTs7t40TAZBA_f1CcwcZet1n16Izs0ZAAM0nWb_QWRvL9dR0tFujI84jrU6bgp469oTpxNcJGdoyhYWPaMJyoMIz-QlmT55DEm4QePKG9RsIW2TCBDOETU86_07b6Nm0WJ0YzNYdoEkTyesdb0ETxOHPq3Kxqy79_uYQ9yHu7nEKnipOhXW4UObzlOsqqt6dGeEkv-w4UVi8TqUcdUy60jFiEu-SmmBkGfTSbDMjSp1_HHJwvPWNeg40tYcs_kl1WxdUj-75Xf-f1NvSj2T3xaN8fKbhh79TaCFam6Bt3NPoJTYJDL7CMHv7Js3iEbUxw298j0sqLaYvnJhmhkQwPW_eYY_NlCEusk1JsfdpjAO2Ubz9vNASVKKWSJKCv19RgAeU6Be4CZW2UbOqrxgSF5cTFRHSbQ=w660-h880-no?authuser=0" alt="picture of myself"></img>
        </div> */}
        {/* <div className="my-3"></div> */}
        <div>
          <div>
            <h5 className="text-bodyText font-semibold text-xl">Me:</h5>
            <p className="text-bodyText">Here's a bunch of text that will sum up just about everything you'll need to know about me.</p>
          </div>
          <div className="my-6"></div>
          <div>
            <h5 className="text-bodyText font-semibold text-xl">Skills:</h5>
            <div className="mt-3">
              <SkillSpan skill="HTML"/>
              <SkillSpan skill="CSS"/>
              <SkillSpan skill="JavaScript"/>
              <SkillSpan skill="React"/>
              <SkillSpan skill="Node"/>
              <SkillSpan skill="SCSS"/>
              <SkillSpan skill="Git"/>
            </div>
          </div>
          <div className="my-6"></div>
          <div>
            <h5 className="text-bodyText font-semibold text-xl">Social:</h5>
            <div className="mt-3 flex justify-between">
              <svg className="fill-current text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              <svg className="fill-current text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <svg className="fill-current text-primary" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const SectionTitle = () => {
    return (
      <div className="text-center">
        <h2 className="text-3xl text-bodyText font-medium">About</h2>
        <hr className="w-16 border-2 border-primary mx-auto mt-3 mb-9"></hr>
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