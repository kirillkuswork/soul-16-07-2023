import React from "react";

export interface ISvg {
  id: string,
  addClass?: string
}

const ContactsPageSvg = ({ id, addClass }: ISvg) => {
  switch (id) {
    case 'map': {
      return (
        <svg className={addClass} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 15.5L5.5 13.75L1.625 15.25C1.34722 15.3611 1.09028 15.3297 0.854167 15.1558C0.618056 14.9825 0.5 14.75 0.5 14.4583V2.79167C0.5 2.61111 0.552222 2.45139 0.656667 2.3125C0.760556 2.17361 0.902778 2.06944 1.08333 2L5.5 0.5L10.5 2.25L14.375 0.75C14.6528 0.638889 14.9097 0.67 15.1458 0.843333C15.3819 1.01722 15.5 1.25 15.5 1.54167V13.2083C15.5 13.3889 15.4478 13.5486 15.3433 13.6875C15.2394 13.8264 15.0972 13.9306 14.9167 14L10.5 15.5ZM9.66667 13.4583V3.70833L6.33333 2.54167V12.2917L9.66667 13.4583ZM11.3333 13.4583L13.8333 12.625V2.75L11.3333 3.70833V13.4583ZM2.16667 13.25L4.66667 12.2917V2.54167L2.16667 3.375V13.25ZM11.3333 3.70833V13.4583V3.70833ZM4.66667 2.54167V12.2917V2.54167Z" fill="#24292E" />
        </svg>
      )
    }
    case 'car': {
      return (
        <svg className={addClass} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.7667 15.0083C25.6 14.5167 25.1333 14.1667 24.5833 14.1667H15.4167C14.8667 14.1667 14.4083 14.5167 14.2333 15.0083L12.5 20V26.6667C12.5 27.125 12.875 27.5 13.3333 27.5H14.1667C14.625 27.5 15 27.125 15 26.6667V25.8333H25V26.6667C25 27.125 25.375 27.5 25.8333 27.5H26.6667C27.125 27.5 27.5 27.125 27.5 26.6667V20L25.7667 15.0083ZM15.7083 15.8333H24.2833L25.15 18.3333H14.8417L15.7083 15.8333ZM25.8333 24.1667H14.1667V20H25.8333V24.1667Z" fill="#24292E" />
          <path d="M16.25 23.3333C16.9404 23.3333 17.5 22.7737 17.5 22.0833C17.5 21.393 16.9404 20.8333 16.25 20.8333C15.5596 20.8333 15 21.393 15 22.0833C15 22.7737 15.5596 23.3333 16.25 23.3333Z" fill="#24292E" />
          <path d="M23.75 23.3333C24.4404 23.3333 25 22.7737 25 22.0833C25 21.393 24.4404 20.8333 23.75 20.8333C23.0596 20.8333 22.5 21.393 22.5 22.0833C22.5 22.7737 23.0596 23.3333 23.75 23.3333Z" fill="#24292E" />
          <rect x="0.5" y="0.5" width="39" height="39" stroke="#939598" />
        </svg>
      )
    }
    case 'bus': {
      return (
        <svg  className={addClass} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 27.5C14.7639 27.5 14.5658 27.42 14.4058 27.26C14.2464 27.1005 14.1667 26.9028 14.1667 26.6667V24.9583C13.9167 24.6805 13.7153 24.3714 13.5625 24.0308C13.4097 23.6908 13.3333 23.3194 13.3333 22.9167V15C13.3333 13.8472 13.8681 13.0033 14.9375 12.4683C16.0069 11.9339 17.6944 11.6667 20 11.6667C22.3889 11.6667 24.0972 11.9236 25.125 12.4375C26.1528 12.9514 26.6667 13.8055 26.6667 15V22.9167C26.6667 23.3194 26.5903 23.6908 26.4375 24.0308C26.2847 24.3714 26.0833 24.6805 25.8333 24.9583V26.6667C25.8333 26.9028 25.7533 27.1005 25.5933 27.26C25.4339 27.42 25.2361 27.5 25 27.5H24.1667C23.9306 27.5 23.7328 27.42 23.5733 27.26C23.4133 27.1005 23.3333 26.9028 23.3333 26.6667V25.8333H16.6667V26.6667C16.6667 26.9028 16.5869 27.1005 16.4275 27.26C16.2675 27.42 16.0694 27.5 15.8333 27.5H15ZM20.0417 14.1667H24.7083H15.375H20.0417ZM23.3333 20H15H25H23.3333ZM15 18.3333H25V15.8333H15V18.3333ZM17.0833 23.3333C17.4306 23.3333 17.7256 23.2117 17.9683 22.9683C18.2117 22.7255 18.3333 22.4305 18.3333 22.0833C18.3333 21.7361 18.2117 21.4411 17.9683 21.1983C17.7256 20.955 17.4306 20.8333 17.0833 20.8333C16.7361 20.8333 16.4411 20.955 16.1983 21.1983C15.955 21.4411 15.8333 21.7361 15.8333 22.0833C15.8333 22.4305 15.955 22.7255 16.1983 22.9683C16.4411 23.2117 16.7361 23.3333 17.0833 23.3333ZM22.9167 23.3333C23.2639 23.3333 23.5589 23.2117 23.8017 22.9683C24.045 22.7255 24.1667 22.4305 24.1667 22.0833C24.1667 21.7361 24.045 21.4411 23.8017 21.1983C23.5589 20.955 23.2639 20.8333 22.9167 20.8333C22.5694 20.8333 22.2744 20.955 22.0317 21.1983C21.7883 21.4411 21.6667 21.7361 21.6667 22.0833C21.6667 22.4305 21.7883 22.7255 22.0317 22.9683C22.2744 23.2117 22.5694 23.3333 22.9167 23.3333ZM15.375 14.1667H24.7083C24.5 13.9305 24.0522 13.7325 23.365 13.5725C22.6772 13.413 21.5694 13.3333 20.0417 13.3333C18.5556 13.3333 17.4686 13.42 16.7808 13.5933C16.0936 13.7672 15.625 13.9583 15.375 14.1667ZM16.6667 24.1667H23.3333C23.7917 24.1667 24.1842 24.0036 24.5108 23.6775C24.8369 23.3508 25 22.9583 25 22.5V20H15V22.5C15 22.9583 15.1633 23.3508 15.49 23.6775C15.8161 24.0036 16.2083 24.1667 16.6667 24.1667Z" fill="#24292E" />
          <rect x="0.5" y="0.5" width="39" height="39" stroke="#939598" />
        </svg>
      )
    }
    case 'plus': {
      return (
        <svg className={addClass} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="19" y="13" width="2" height="14" fill="#24292E" />
          <rect x="13" y="21" width="2" height="14" transform="rotate(-90 13 21)" fill="#24292E" />
          <rect x="0.5" y="0.5" width="39" height="39" stroke="#24292E" />
        </svg>
      )
    }
    case 'minus': {
      return (
        <svg className={addClass} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="13" y="21" width="2" height="14" transform="rotate(-90 13 21)" fill="#24292E" />
          <rect x="0.5" y="0.5" width="39" height="39" stroke="#24292E" />
        </svg>
      )
    }
    case 'placemark': {
      return (
        <svg className={addClass} width="60" height="112" viewBox="0 0 60 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46 102.5L36.0636 97.6292L28.5 112L13 105L20.5 90L36.0636 97.6292L38.5 93L48.5 98L46 102.5Z" fill="#003A50" fillOpacity="0.6" />
          <path d="M60 30C60 46.5685 38 76 30 89.5C22.5 76 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z" fill="#003A50" />
          <path d="M20.764 52.5011H38.4064V49.7852H20.764V52.5011ZM29.6124 47.3655C35.5113 47.3655 38.4064 43.2274 38.4064 39.0197V13H35.1258V38.4817C35.1258 42.4303 33.411 44.7019 29.6574 44.7019C26.0645 44.7019 24.0801 42.5784 24.0801 38.3859V13H20.764V38.828C20.764 43.075 23.6023 47.372 29.6124 47.372" fill="#EEEEEE" />
        </svg>

      )
    }
    case 'baloon': {
      return (
        <svg className={addClass} width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 30C60 46.5685 38 76 30 89.5C22.5 76 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z" fill="#003A50" />
          <path d="M20.764 52.5011H38.4064V49.7852H20.764V52.5011ZM29.6124 47.3655C35.5113 47.3655 38.4064 43.2274 38.4064 39.0197V13H35.1258V38.4817C35.1258 42.4303 33.411 44.7019 29.6574 44.7019C26.0645 44.7019 24.0801 42.5784 24.0801 38.3859V13H20.764V38.828C20.764 43.075 23.6023 47.372 29.6124 47.372" fill="#EEEEEE" />
        </svg>

      )
    }
    case 'area': {
      return (
        <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33 12.5L23.0636 7.6292L15.5 22L0 15L7.5 0L23.0636 7.6292L25.5 3L35.5 8L33 12.5Z" fill="#003A50" fillOpacity="0.6" />
        </svg>

      )
    }
    case 'doc': {
      return (
        <svg className={addClass}  width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" fill="#24292E" />
          <path d="M42 39L42 44L18 44L18 39" stroke="white" strokeWidth="3" />
          <path d="M30 16L30 35.25M30 35.25L37 27.5176M30 35.25L23 27.5176" stroke="white" strokeWidth="3" />
        </svg>
      )
    }
    default: {
      break
    }
  }
}

export default ContactsPageSvg;