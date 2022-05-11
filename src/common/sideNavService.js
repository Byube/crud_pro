import { computed } from 'vue';
import { useStore } from 'vuex';
import constant from '@/common/constant.js';
// import api from '@/api/index.js';

export const activeClassName = () => {
    const store = useStore();
    const overlayMenuActive = computed(() => store.state.sideNav.overlayMenuActive);
    const mobileMenuActive = computed(() => store.state.sideNav.mobileMenuActive);
    const staticMenuInactive = computed(() => store.state.sideNav.staticMenuInactive);
    const layoutMode = computed(() => store.state.sideNav.layoutMode);
    const checkMenuOnclick = computed(() => store.state.sideNav.menuClick);
    const changeMobileMenuState = () => {
        store.dispatch(constant.store.menulist.CHANGEMOBILEMENUSTATE, !mobileMenuActive.value);
    };
    const changeMobileState = (status) => {
        store.dispatch(constant.store.menulist.CHANGEMOBILESTATE, status);
    };
    const changeOverlayMenuState = () => {
        store.dispatch(constant.store.menulist.CHANGEOVERLAYMENUSTATE, !overlayMenuActive.value);
    };
    const changeOverMenuState = (status) => {
        store.dispatch(constant.store.menulist.CHANGEOVERMENUSTATE, status);
    };
    const changeStaticMenuInactive = () => {
        store.dispatch(constant.store.menulist.CHANGESTATICMENUINACTIVE, !staticMenuInactive.value);
    };
    const changeLayoutMode = (message) => {
        store.dispatch(constant.store.menulist.CHANGELAYOUTMODE, message);
    };
    const changeMenuOnclick = (status) => {
        store.dispatch(constant.store.menulist.CHANGEMENUONCLICK, status);
    };
    return {
        changeMobileMenuState,
        changeStaticMenuInactive,
        changeLayoutMode,
        overlayMenuActive,
        layoutMode,
        mobileMenuActive,
        staticMenuInactive,
        changeOverlayMenuState,
        changeOverMenuState,
        changeMobileState,
        changeMenuOnclick,
        checkMenuOnclick
    }
}

// export const saveMenuList = async () => {
//     //서버
//     const response = await api.get(constant.url.MENU_LIST);
//     const menuList = response.data.resultData;
    
    
//     //로컬
//     // const response = await axios.get('/testMenu');
//     // const menuList = response.data;
//     for (let i = 0; i < menuList.length; i++) {
//         for (let j = 0; j < menuList[i].items.length; j++) {
//             if (menuList[i].items[j].items.length === 0) {
//                 delete menuList[i].items[j].items;
//             }
//         }
//     }
//     const localMenuList = JSON.stringify(menuList);
//     // console.log(localMenuList)
//     window.localStorage.setItem(constant.data.MENULIST, localMenuList);
// }

// export const getMenuList = () => {
//     const localMenuList = window.localStorage.getItem(constant.data.MENULIST);
//     const menu_list = JSON.parse(localMenuList);
//     // console.log(' >>> ',menu_list);
//     return {
//         menu_list
//     }
// }
