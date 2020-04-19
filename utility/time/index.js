
Vue.config.devtools = true;
Vue.component("timer", {
    template: "#timer-component"
});
const date = new Vue({
    el: "#date",
    data: {
        date: new Date(),
    }
});
date.date = new Date();

new Vue({
    el: "#timers",
    data: {
        hour: 0,
        minutes: 0,
        second: 0
    },
    template: " "||"<timer></timer>"
});
const htmlInit = (data)=>{
    const title = document.getElementsByTagName("h1");
    title.innertext = document.title
};
