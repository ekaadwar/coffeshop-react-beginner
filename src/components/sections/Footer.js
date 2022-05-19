import React from 'react'
import { Link } from 'react-router-dom'

import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im'
import IconCircle from '../components/IconCircle'

// const Icon = () => {
//   return <ImTwitter color="#6A4029" />;
// };

class Footer extends React.Component {
  twitter = () => {
    return <ImTwitter color="#6A4029" />
  }

  facebook = () => {
    return <ImFacebook color="#6A4029" />
  }

  instagram = () => {
    return <ImInstagram color="#6A4029" />
  }

  render() {
    return (
      <footer className="bg-gray-200 py-10">
        <div className="container mx-auto px-2 lg:px-10">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:flex-1 space-y-7">
              <Link to="/" className="flex items-center flex-row">
                <img
                  src={this.props.image}
                  alt="Logo Eka Coffee"
                  className="mr-3"
                />
                <h3 className="font-bold text-yellow-900">Eka Coffee</h3>
              </Link>

              <p className="leading-8 max-w-xs">
                Coffee Shop is a store that sells some good meals, and
                especially coffee. We provide high quality beans
              </p>

              <div className="flex space-x-3">
                <IconCircle icon={this.facebook()} diametre={8} />
                <IconCircle icon={this.twitter()} diametre={8} />
                <IconCircle icon={this.instagram()} diametre={8} />
              </div>
            </div>

            <div className="flex lg:justify-end mt-10 sm:mt-0">
              <div className="">
                <div className="foot-info grid grid-cols-2">
                  <div className="text-xl font-bold">Product</div>
                  <div className="text-xl font-bold">Engage</div>
                  <div>Download</div>
                  <div>Coffe Shop?</div>
                  <div>Pricing</div>
                  <div>FAQ</div>
                  <div>Location</div>
                  <div>About Us</div>
                  <div>Countries</div>
                  <div>Privacy Policy</div>
                  <div>Blog</div>
                  <div>Term of Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
