import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import MegaMenu from './MegaMenu.jsx';

const data = [
  {
    title: 'Health and Benefits',
    menuSections: [
      {
        title: 'Health Care',
        links: {
          columnOne: {
            title: 'Get Health Care Benefits',
            links: [
              {
                text: 'About VA Health Care Coverage',
                href: '/health-care/about-va-health-care/'
              }, {
                text: 'Eligibility',
                href: '/health-care/eligibility'
              }, {
                text: 'Application Process',
                href: '/health-care/apply'
              }, {
                text: 'After You Apply',
                href: '/health-care/after-you-apply'
              }, {
                text: 'Family and Caregiver Health Benefits',
                href: '/health-care/family-caregiver-health-benefits/'
              }, {
                text: 'Apply for Health Care',
                href: '/health-care/apply/application/introduction'
              }
            ]
          },
          columnTwo: {
            title: 'Manage Your Health Benefits',
            links: [
              {
                text: 'Refill and Track Your Perscriptions',
                href: '/health-care/prescriptions'
              }, {
                text: 'Message Your Health Care Team',
                href: '/health-care/messaging'
              }, {
                text: 'Schedule or Manage Your VA Appointment',
                href: '/health-care/schedule-an-appointment'
              }, {
                text: 'View Your Lab and Test Results',
                href: 'https://www.myhealth.va.gov/mhv-portal-web/web/myhealthevet/labs-tests'
              }, {
                text: 'Order Hearing Aid Batteries or Prosthetic Socks',
                href: 'https://www.ebenefits.va.gov/ebenefits/about/feature?feature=hearing-aid-batteries-and-prosthetic-socks'
              }, {
                text: 'Get Your VA Health Records (Blue Button)',
                href: '/health-care/health-records'
              }, {
                text: 'Update Your Health Benefits',
                href: 'https://www.va.gov/vaforms/medical/pdf/vha-10-10ezr-fill.pdf'
              }, {
                text: 'Make a Health Care Payment',
                href: 'https://www.pay.gov/public/form/start/25987221'
              }
            ]
          },
          columnThree: {
            img: {
              src: 'http://via.placeholder.com/228x128',
              alt: 'Place Holder Image'
            },
            link: {
              text: 'Learn About the Veterans Choice Program',
              href: '#'
            },
            description: 'the Veterans Choice Program allows you to receive health care within your community'
          },
          seeAllLink: {
            text: 'Health Care',
            href: '/health-care/'
          }
        }
      }, {
        title: 'Disability',
        links: {
          columnOne: {
            title: 'Get Disability Benefits',
            links: [
              {
                text: 'Eligibility',
                href: '/disability-benefits/eligibility/'
              }, {
                text: 'Application Process',
                href: '/disability-benefits/apply/'
              }, {
                text: 'After You Apply',
                href: '/disability-benefits/after-you-apply/'
              }, {
                text: 'Apply for Disability Compensation',
                href: 'ebenefits.va.gov/ebenefits/about/feature?feature=disability-compensation'
              }
            ]
          },
          columnTwo: {
            title: 'Manage Your Disability Benefits',
            links: [
              {
                text: 'Track Your Claims and Appeals',
                href: '/track-claims'
              }, {
                text: 'File an Appeal',
                href: '/disability-benefits/claims-appeal/'
              }, {
                text: 'Add or Remove a Dependent',
                href: 'ebenefits.va.gov/ebenefits/about/feature?feature=dependent-compensation'
              }, {
                text: 'Upload Documents for a Submitted Claim',
                href: 'ebenefits.va.gov/ebenefits/about/feature?feature=compensation-pension-claim-status'
              }, {
                text: 'Update Your Direct Deposit and Contact Information',
                href: 'ebenefits.va.gov/ebenefits/about/feature?feature=direct-deposit-and-contact-information'
              }, {
                text: 'Request a Representative for VA Claims',
                href: 'ebenefits.va.gov/ebenefits/about/feature?feature=request-vso-representative'
              }, {
                text: 'Share Your VA Health Records',
                href: 'ebenefits.va.gov/ebenefits/vapii'
              }, {
                text: 'Print Your Benefit Summary Letter',
                href: '/download-va-letters/'
              }
            ]
          },
          columnThree: {
            img: {
              src: 'http://via.placeholder.com/228x128',
              alt: 'Placeholder'
            },
            link: {
              text: 'Learn About the Veterans Choice Program',
              href: '#'
            },
            description: 'the Veterans Choice Program allows you to receive health care within your community'
          },
          seeAllLink: {
            text: 'Disability',
            href: '/disability-benefits/'
          }
        }
      }, {
        title: 'Education and Training',
        links: {
          columnOne: {
            title: 'Get Education Benefits',
            links: [
              {
                text: 'About GI Bill Benefits',
                href: '/education/gi-bill/'
              }, {
                text: 'Eligibility',
                href: '/education/eligibility/'
              }, {
                text: 'Application Process',
                href: '/education/after-you-apply/'
              }, {
                text: 'Vocational Rehabilitation & Employment',
                href: '/employment/vocational-rehab-and-employment/'
              }, {
                text: 'Survivor and Dependent Education Benefits',
                href: '#'
              }, {
                text: 'Other Education Assistance Programs',
                href: '/education/other-educational-assistance-programs/'
              }, {
                text: 'Apply for GI Bill Benefits',
                href: '/education/apply/'
              }
            ]
          },
          columnTwo: {
            title: 'Manage Your Education Benefits',
            links: [
              {
                text: 'View Your VA Payment History',
                href: 'https://ebenefits.va.gov/ebenefits/about/feature?feature=payment-history'
              }, {
                text: 'Check Your Post-9/11 GI Bill Benefits',
                href: '/education/gi-bill/post-9-11/ch-33-benefit'
              }, {
                text: 'Transfer Your Post-9/11 GI Bill Benefits',
                href: '/education/gi-bill/transfer/'
              }, {
                text: 'Make a Change to Your Current GI Bill Benefits',
                href: '/education/apply/'
              }, {
                text: 'Update Your Direct Deposit Information',
                href: '#'
              }, {
                text: 'Track Your Education Benefits Eligibility Appeal Status',
                href: 'https://www.ebenefits.va.gov/ebenefits/about/feature?feature=compensation-claim-appeal-status'
              }, {
                text: 'File an Appeal',
                href: '#'
              }
            ]
          },
          columnThree: {
            img: {
              src: 'http://via.placeholder.com/228x128',
              alt: 'Placeholder'
            },
            link: {
              text: 'Learn About the Veterans Choice Program',
              href: '#'
            },
            description: 'the Veterans Choice Program allows you to receive health care within your community'
          },
          seeAllLink: {
            text: 'Education',
            href: '/education/'
          }
        }
      }, {
        title: 'Careers and Employment',
        links: {
          columnOne: {
            title: 'Get Career and Employment Benefits',
            links: [
              {
                text: 'About Vocational Rehabilitation and Employment',
                href: '/employment/vocational-rehab-and-employment/'
              }, {
                text: 'Eligibility',
                href: '/employment/vocational-rehab-and-employment/eligibility/'
              }, {
                text: 'Application Process',
                href: '/employment/vocational-rehab-and-employment/apply-vre/'
              }, {
                text: 'Education and Career Counseling',
                href: '/education/tools-programs/education-career-counseling/'
              }, {
                text: 'Support for Veteran-Owned Small Businesses',
                href: '/employment/job-seekers/register-your-business/'
              }, {
                text: 'Resources for Family Members',
                href: '/employment/job-seekers/family-members/'
              }, {
                text: 'Apply for Vocational Rehabilitation and Employment',
                href: 'http://ebenefits.va.gov/ebenefits/about/feature?feature=vocational-rehabilitation-and-employment'
              }
            ]
          },
          columnTwo: {
            title: 'Manage Your Career',
            links: [
              {
                text: 'Find a Job',
                href: 'https://dol.gov/veterans/findajob/'
              }, {
                text: 'Build Your Resume',
                href: '/employment/job-seekers/create-resume'
              }
            ]
          },
          columnThree: {
            img: {
              src: 'http://via.placeholder.com/228x128',
              alt: 'Placeholder'
            },
            link: {
              text: 'Learn About the Veterans Choice Program',
              href: '#'
            },
            description: 'the Veterans Choice Program allows you to receive health care within your community'
          },
          seeAllLink: {
            text: 'Careers and Employment',
            href: '/employment/'
          }
        }
      }, {
        title: 'Pension',
        links: {
          columnOne: {
            title: 'Get Pension Benefits',
            links: [
              {
                text: 'Eligibility',
                href: '/pension/eligibility/'
              }, {
                text: 'Application Process',
                href: '/pension/apply/'
              }, {
                text: 'Aid and Attendance or Housebound Allowance',
                href: '/pension/aid-attendance-housebound/'
              }, {
                text: 'Survivor Pension',
                href: '/pension/survivors-pension/'
              }, {
                text: 'Apply for Veteran Pension',
                href: '/pension/apply/'
              }
            ]
          },
          columnTwo: {
            title: 'Manage Your Pension Benefits',
            links: [
              {
                text: 'Track Your Claim Status',
                href: 'https://www.ebenefits.va.gov/ebenefits/about/feature?feature=compensation-pension-claim-status'
              }, {
                text: 'View Your VA Payment History',
                href: 'https://ebenefits.va.gov/ebenefits/about/feature?feature=payment-history'
              }, {
                text: 'Track Your Appeal Status',
                href: 'https://www.ebenefits.va.gov/ebenefits/about/feature?feature=compensation-claim-appeal-status'
              }, {
                text: 'Update Your Direct Deposit and Contact Information',
                href: 'https://ebenefits.va.gov/ebenefits/about/feature?feature=direct-deposit-and-contact-information'
              }
            ]
          },
          columnThree: {
            img: {
              src: 'http://via.placeholder.com/228x128',
              alt: 'Placeholder'
            },
            link: {
              text: 'Learn About the Veterans Choice Program',
              href: '#'
            },
            description: 'the Veterans Choice Program allows you to receive health care within your community'
          },
          seeAllLink: {
            text: 'Pension',
            href: '/pension/'
          }
        }
      }, {
        title: 'Housing Assistance',
        links: {
          columnOne: {
            title: 'Get A VA Home Loan',
            links: [
              {
                text: 'VA Backed Home Loan Options',
                href: '/housing-assistance/home-loans/loan-options/'
              }, {
                text: 'Eligibility',
                href: '/housing-assistance/home-loans/eligibility/'
              }, {
                text: 'Apply for a Home Loan COE',
                href: '/housing-assistance/home-loans/apply-for-certificate-of-eligibility/'
              }, {
                text: 'Track Your Housing Appeal Status',
                href: 'https://www.ebenefits.va.gov/ebenefits/about/feature?feature=compensation-claim-appeal-status'
              }
            ]
          },
          columnTwo: {
            title: 'Get Adapted Housing Assistance',
            links: [
              {
                text: 'Housing Grants for Disabled Veterans',
                href: '/housing-assistance/adaptive-housing-grants/'
              }, {
                text: 'Apply for Specially Adapted Housing',
                href: '#'
              }, {
                text: 'Track Your Specially Adapted Housing Claim Status',
                href: 'https://ebenefits.va.gov/ebenefits/about/feature?feature=sah-grant'
              }
            ]
          },
          columnThree: {
            img: {
              src: 'http://via.placeholder.com/228x128',
              alt: 'Placeholder'
            },
            link: {
              text: 'Learn About the Veterans Choice Program',
              href: '#'
            },
            description: 'the Veterans Choice Program allows you to receive health care within your community'
          },
          seeAllLink: {
            text: 'Housing Assistance',
            href: '/housing-assistance/'
          }
        }
      }, {
        title: 'Life Insurance',
        links: {
          columnOne: {
            title: 'Get Life Insurance',
            links: [
              {
                text: 'Life Insurance Options and Eligibility',
                href: '/life-insurance/options-and-eligibility/'
              }, {
                text: 'Benefits for Totally Disabled or Terminally Ill Policyholders',
                href: '/life-insurance/disabled-and-terminally-ill/'
              }, {
                text: 'Beneficiary Financial Counseling and Online Will Preparation',
                href: 'https://benefits.va.gov/insurance/bfcs.asp'
              }
            ]
          },
          columnTwo: {
            title: 'Manage Your Life Insurance',
            links: [
              {
                text: 'Mange Your Policy',
                href: 'https://www.vets.gov/life-insurance/manage-your-policy/'
              }, {
                text: 'Update Your Beneficiaries',
                href: 'https://benefits.va.gov/INSURANCE/updatebene.asp'
              }, {
                text: 'File a Claim',
                href: 'https://benefits.va.gov/INSURANCE/sglivgli.asp'
              }, {
                text: 'Track Your Life Insurance Eligibility Appeal Status',
                href: 'https://www.ebenefits.va.gov/ebenefits/about/feature?feature=compensation-claim-appeal-status'
              }
            ]
          },
          columnThree: {
            img: {
              src: 'http://via.placeholder.com/228x128',
              alt: 'Placeholder'
            },
            link: {
              text: 'Learn About the Veterans Choice Program',
              href: '#'
            },
            description: 'the Veterans Choice Program allows you to receive health care within your community'
          },
          seeAllLink: {
            text: 'Life Insurance',
            href: '/life-insurance/'
          }
        }
      }, {
        title: 'Burials and Memorials',
        links: {
          columnOne: {
            title: 'Get Burial and Memorial  Benefits',
            links: [
              {
                text: 'Eligibility',
                href: '/burials-and-memorials/eligibility/'
              }, {
                text: 'Pre-Need Burial Eligibility Determination',
                href: '/burials-and-memorials/pre-need/'
              }, {
                text: 'Burial Allowances',
                href: '/burials-and-memorials/survivor-and-dependent-benefits/burial-costs/'
              }, {
                text: 'Survivor and Dependent Compensation (DIC)',
                href: '/burials-and-memorials/survivor-and-dependent-benefits/compensation/'
              }, {
                text: 'Headstones, Markers and Medallions',
                href: '/burials-and-memorials/honor/headstones-markers-medallions/'
              }, {
                text: 'Burial Flags',
                href: '/burials-and-memorials/honor/flags-and-memorial-certificates/'
              }, {
                text: 'Presidential Memorial Certificates',
                href: '/burials-and-memorials/honor/flags-and-memorial-certificates/'
              }, {
                text: 'Bereavement Counseling',
                href: '/burials-and-memorials/bereavement-counseling/'
              }
            ]
          },
          columnTwo: {
            title: 'Plan a Burial',
            links: [
              {
                text: 'Plan a Burial for a Family Member',
                href: '/burials-and-memorials/burial-planning/'
              }, {
                text: 'Schedule a Burial in a VA National Cemetery',
                href: 'https://www.cem.va.gov/cem/burial_benefits/need.asp'
              }, {
                text: 'Replace Medals and Awards',
                href: 'https://www.cem.va.gov/recmed_records.asp'
              }, {
                text: 'Find Historical Military Records',
                href: '/burials-and-memorials/burial-planning/'
              }, {
                text: 'Find a Cemetery',
                href: '/facilities'
              }, {
                text: 'Find a Gravesite',
                href: 'https://m.va.gov/gravelocator/index.cfm'
              }
            ]
          },
          columnThree: {
            img: {
              src: 'http://via.placeholder.com/228x128',
              alt: 'Placeholder'
            },
            link: {
              text: 'Learn About the Veterans Choice Program',
              href: '#'
            },
            description: 'the Veterans Choice Program allows you to receive health care within your community'
          },
          seeAllLink: {
            text: 'Burials and Memorials',
            href: '/burials-and-memorials/'
          }
        }
      }, {
        title: 'Records',
        links: {
          columnOne: {
            title: 'Get Records Benefits',
            links: [
              {
                text: 'Request Your Military Personnel File (DD-214)',
                href: 'https://ebenefits.va.gov/ebenefits/about/feature?feature=military-personnel-file'
              }, {
                text: 'Get Your VA Health Records (Blue Button)',
                href: 'https://www.myhealth.va.gov/mhv-portal-web/download-my-data'
              }, {
                text: 'Share Your VA Health Records',
                href: 'https://ebenefits.va.gov/ebenefits/vapii'
              }, {
                text: 'Download Your VA Letters',
                href: '/download-va-letters/'
              }, {
                text: 'Request a Home Loan COE',
                href: '/housing-assistance/home-loans/apply-for-certificate-of-eligibility/'
              }, {
                text: 'How to Apply for a Discharge Upgrade',
                href: '/discharge-upgrade-instructions/'
              }, {
                text: 'Find Historical Records (National Archives)',
                href: 'https://cem.va.gov/recmed_records.asp'
              }, {
                text: 'Apply for a Veteran ID Card',
                href: 'https://www.vets.gov/veteran-id-card/'
              }
            ]
          },
          columnThree: {
            img: {
              src: 'http://via.placeholder.com/228x128',
              alt: 'Placeholder'
            },
            link: {
              text: 'Learn About the Veterans Choice Program',
              href: '#'
            },
            description: 'the Veterans Choice Program allows you to receive health care within your community'
          }
        }
      }
    ]
  }, {
    title: 'About VA',
    menuSections: {
      mainColumn: {
        title: 'Inside VA',
        links: [
          {
            text: 'Veterans Health Administration',
            href: 'https://va.gov/health/'
          }, {
            text: 'Veterans Benefits Administration',
            href: 'https://benefits.va.gov/benefits/'
          }, {
            text: 'National Cemetary Administration',
            href: 'https://cem.va.gov'
          }, {
            text: 'VA Leadership',
            href: 'https://va.gov/opa/bios/index.asp'
          }, {
            text: 'Public Affairs',
            href: 'https://va.gov/OPA/index.asp'
          }, {
            text: 'Congressional Affairs',
            href: 'https://va.gov/oca/index.asp'
          }, {
            text: 'VA Plans, Budget, and Performance',
            href: 'https://va.gov/performance/'
          }, {
            text: 'All VA Offices and Organizations',
            href: 'https://va.gov/landing_organizations.htm'
          }
        ]
      },
      columnOne: {
        title: 'Innovation at VA',
        links: [
          {
            text: 'Health Research',
            href: 'https://research.va.gov'
          }, {
            text: 'Public Health',
            href: 'https://publichealth.va.gov'
          }, {
            text: 'Veterans Choice Program',
            href: 'https://va.gov/COMMUNITYCARE/programs/veterans/VCP/index.asp'
          }, {
            text: 'VA Open Data',
            href: 'https://data.va.gov'
          }, {
            text: 'Veterans Analysis and Statistics',
            href: 'https://va.gov/VETDATA/index.asp'
          }, {
            text: 'Appeals Modernization',
            href: 'https://benefits.va.gov/benefits/appeals.asp'
          }, {
            text: 'VA Center for Innovation',
            href: 'https://innovation.va.gov'
          }, {
            text: 'Recovery Act',
            href: 'https://va.gov/recovery/'
          }
        ]
      },
      columnTwo: {
        title: 'Learn About VA',
        links: [
          {
            text: 'VA Mission, Vision, and Values',
            href: 'https://va.gov/ABOUT_VA/index.asp'
          }, {
            text: 'History of VA',
            href: 'https://va.gov/about_va/vahistory.asp'
          }, {
            text: 'National Cemetery History Program',
            href: 'https://cem.va.gov/cem/history/index.asp'
          }, {
            text: 'Veterans Legacy Program',
            href: 'https://cem.va.gov/cem/legacy/index.asp'
          }, {
            text: 'Volunteer or Donate',
            href: '#'
          }
        ]
      },
      columnThree: {
        img: {
          src: 'http://via.placeholder.com/228x128',
          alt: 'Place Holder Image'
        },
        link: {
          text: 'Learn About the Veterans Choice Program',
          href: '#'
        },
        description: 'the Veterans Choice Program allows you to receive health care within your community'
      }
    }
  }, {
    title: 'Find a VA Location',
    href: '/facilities/'
  }
];

let div;
let megaMenu;

describe('<MegaMenu>', () => {

  beforeEach(() => {
    div = document.createElement('div');
    div.setAttribute('id', 'mega-menu');
    document.body.appendChild(div);

    megaMenu = mount(
      <MegaMenu
        data={data}
        handleOnClick={(title) => { title; }}
        updateCurrentSection={(title) => { title; }}></MegaMenu>,
      {
        attachTo: div
      }
    );
  });

  afterEach(() => {
    document.body.removeChild(div);
  });

  it('should render', () => {
    const menuTexts = ['Home', 'Health and Benefits', 'About VA', 'Find a VA Location'];

    expect(megaMenu.find('.login-container').exists()).to.be.true;

    megaMenu.find('.vetnav-level1').forEach((el) => {
      expect(menuTexts.includes(el.text())).to.be.true;
    });
  });

  it('should run handleOnClick if clicked on', () => {
    const spy = sinon.spy(megaMenu.instance().props, 'handleOnClick');
    megaMenu.find('button').first().simulate('click');

    expect(spy.calledOnce).to.be.true;
    expect(spy.getCall(0).args[0]).to.equal('Health and Benefits');
  });

  it('should not show dropdown on initial load', () => {
    expect(megaMenu.find('.vetnav-level2').exists()).to.be.false;
  });

  it('should show dropdown if state.currentDropdown is = menu title', () => {
    megaMenu.setProps({
      ...megaMenu.props(),
      currentDropdown: 'Health and Benefits',
    });

    expect(megaMenu.find('.vetnav-level2').first().text()).to.equal('Health Care');
  });

  it('should run updateCurrentSection if menu section is clicked on', () => {
    const spy = sinon.spy(megaMenu.instance(), 'updateCurrentSection');

    megaMenu.setProps({
      currentDropdown: 'Health and Benefits',
    });

    megaMenu.find('.vetnav-level2').at(1).simulate('click');

    expect(spy.calledOnce).to.be.true;
    expect(spy.getCall(0).args[0]).to.equal('Disability');
  });

  it('should show Disability section if state.currentSection is = Disability', () => {
    megaMenu.setProps({
      ...megaMenu.props(),
      currentDropdown: 'Health and Benefits',
      currentSection: 'Disability',
    });

    expect(megaMenu.find('.panel-title').at(0).text()).to.equal('Get Disability Benefits');
  });
});
