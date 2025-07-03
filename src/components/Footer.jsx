import React from 'react'

const Footer = () => {
  const lineBreaks = [...Array(10)].map(() => <br />);

  return (
    <div>
        {lineBreaks}
        <div class="text-center hover:text-black duration-500">
            <a id="pbsvkwebsite" href="https://github.com/pbsvk/codespaces-react">
                pbsvk ©
                </a>
        </div>
    </div>
  )
}

export default Footer;
