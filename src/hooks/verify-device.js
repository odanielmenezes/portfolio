const checkDevice = () => {
    const navigate = navigator.userAgent;
    let isMobile = false;

    switch (navigate) {
        case '/Android/i':
            isMobile = true
            break;
        case '/webOS/i':
            isMobile = true
            break;
        case '/Windows Phone/i':
            isMobile = true
            break;
        case '/iPhone/i':
            isMobile = true
            break;
        case '/iPad/i':
            isMobile = true
            break;
        case '/iPod/i':
            isMobile = true
            break;
        case '/BlackBerry/i':
            isMobile = true
            break;
        default: return isMobile;
    }
}

export default checkDevice;