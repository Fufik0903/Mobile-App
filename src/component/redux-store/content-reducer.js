import icon_rigth from "../../assets/img/menu_img/icon_16x16_M_Arrow-right.svg";

const initialState = {
    tasks: [
        {name: 'Services', img: icon_rigth, navLink: '/services',nextNavLink:'/cloud_calc'},
        {name: 'Managed IT', img: icon_rigth, navLink: '/managed_it'},
        {name: 'Telecom Solutions', img: icon_rigth, navLink: '/telecom_solutions'},
        {name: 'About Us', img: icon_rigth, navLink: '/about_us'}
    ]
}
const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

    }
}

export default contentReducer;