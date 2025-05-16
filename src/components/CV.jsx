import React from 'react';

const CV = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-redbull-red to-redbull-blue bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Professional Summary */}
          <div className="mb-12">
            <p className="font-rajdhani text-xl text-gray-300 leading-relaxed">
              Skilled Front-End Developer with expertise in HTML, CSS, JavaScript, Bootstrap, and React. 
              Currently pursuing a Bachelor's in Business Information Systems at Tanta University. 
              Passionate about creating responsive, user-friendly applications and eager to learn new technologies. 
              Strong team player with excellent problem-solving and communication skills.
            </p>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-redbull-red">Education</h3>
            <div className="bg-black/50 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="font-rajdhani text-xl font-bold text-white mb-2">
                Bachelor's in Business Information Systems (BIS)
              </h4>
              <p className="font-rajdhani text-gray-300">
                Faculty of Business, Tanta University
              </p>
              <p className="font-rajdhani text-gray-400">
                Expected Graduation: 2026 (2021-Present)
              </p>
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-redbull-blue">Certificates</h3>
            <div className="space-y-4">
              {[
                'Front-End Diploma | Route IT Training Center',
                'English Course | American University in Cairo (AUC)',
                'EST Certification | American University in Cairo (AUC)'
              ].map((certificate, index) => (
                <div 
                  key={index}
                  className="bg-black/50 rounded-lg p-4 backdrop-blur-sm border border-redbull-red/20
                           transform transition-all duration-300 hover:scale-105 hover:border-redbull-blue/50"
                >
                  <p className="font-rajdhani text-lg text-white">{certificate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV; 