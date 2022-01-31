import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>Letter from our founders</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Learn about new features</p>
        <p>Airbnb Plus</p>
        <p>Careers</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Celebrating diversity & belonging</p>
        <p>Combating discrimination</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOSTING</h5>
        <p>Try hosting</p>
        <p>AirCover: protection for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Safety information</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 Response</p>
        <p>Supporting people with disabilities</p>
        <p>Report a neighborhood concern</p>
      </div>
    </div>
  );
};

export default Footer;
