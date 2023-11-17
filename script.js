const navigation =
    document.querySelector(".primary-navigation");

const navigationHeight =
    navigation.offSethight;

document.documentElement.style.setProperty(
    "--scrool-padding",
    navigationHeight + "px"
);