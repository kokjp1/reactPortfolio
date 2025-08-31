import React from 'react';
import cambridgeImg from '@/assets/images/cambridge.jpg';
import propedeuseImg from '@/assets/images/propedeuse.jpg';
import pwsImg from '@/assets/images/PWSprijs.jpg';
import externalLinkIcon from '@/assets/images/external-link.svg';

interface Certification {
  id: string;
  title: string;
  description: React.ReactNode;
  image: string;
  alt: string;
  extraLink?: {
    href: string;
    text: string;
    icon: string;
  };
}

const certifications: Certification[] = [
  {
    id: 'my_modal_5',
    title: 'Cambridge Certificate',
    description: (
      <>
        Cambridge English Certificate. My result <strong>C1</strong>. To know what my Cambridge Certificate can mean for you, you can view <a href="https://www.cambridgeenglish.org/exams-and-tests/advanced/" className="link" target="blank">the official video/website from the Cambridge Institute.</a>
      </>
    ),
    image: cambridgeImg,
    alt: 'Cambridge Certificate',
  },
  {
    id: 'my_modal_6',
    title: 'Propedeuse CMD',
    description: <>Cum Laude Propedeuse aan de Hogeschool van Amsterdam (<strong>2024</strong>).</>,
    image: propedeuseImg,
    alt: 'Propedeuse CMD',
  },
  {
    id: 'my_modal_7',
    title: 'PWS Prijs',
    description: (
      <>
        Dit certificaat is uitgedeeld aan het beste PWS van de (HAVO) eindexamenklas <strong>2023</strong>. Het PWS ging over hoe games gemaakt worden. We hebben uitgebreid onderzoek gedaan naar het complete proces van games ontwikkelen, en hebben hiervoor onder meer met de CEO van een game bedrijf gesproken.
      </>
    ),
    image: pwsImg,
    alt: 'PWS Prijs',
    extraLink: {
      href: 'https://1drv.ms/w/c/2cf1b3bc7dff1546/EUyVZJWD9j1BlREdKAEM1DkB3_cPfXwnSh1uHtcEXXKtCg?e=PDseDr',
      text: 'Profielwerkstuk',
      icon: externalLinkIcon,
    },
  },
];

export default function CertificationsAccordion() {
  const openDialog = (id: string) => {
    const dlg = document.getElementById(id);
    if (dlg instanceof HTMLDialogElement) dlg.showModal();
  };

  return (
    <div className="space-y-4">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          tabIndex={0}
          className="collapse collapse-plus bg-base-100 border border-base-300"
        >
          <div className="collapse-title font-semibold">{cert.title}</div>
          <div className="collapse-content text-sm flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              {cert.description}
              {cert.extraLink && (
                <p className="mt-2">
                  <a
                    href={cert.extraLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline inline-flex items-center gap-1"
                  >
                    {cert.extraLink.text}
                    <img
                      src={cert.extraLink.icon}
                      alt="external link"
                      className="w-4 h-4"
                    />
                  </a>
                </p>
              )}
            </div>

            <img
              src={cert.image}
              alt={cert.alt}
              className="w-24 h-24 object-cover rounded-lg cursor-pointer"
              onClick={() => openDialog(cert.id)}
            />

            <dialog id={cert.id} className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{cert.title}</h3>
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="max-h-[60vh] w-auto py-4 mx-auto"
                />
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      ))}
    </div>
  );
}
