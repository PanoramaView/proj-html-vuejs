const app = new Vue({
    el: "#app_vue",
    data: {
        activeNavlink: {},
        navlinks: [
            {
                name: 'Home',
            },
            {
                name: 'Courses',
            },
            {
                name: 'About Us',
            },
            {
                name: 'News',
            },
            {
                name: 'Pages',
            },
            {
                name: 'Contact',
            },
            {
                name: 'Purchase',
            },
        ],
        activeFaculty: {},
        facultiesList:[
            {
                img:'img/Gavel-v2.png',
                bigimg:'img/Gavel-Illustration-e1556884768193.png',
                name: 'Law Faculty',
                descr: "Learning from world-leading academics and practitioners, you'll not only receive an outstanding grounding in the theory of law, but wyou will be able to understand how those principles are applied in practice through a range of student-led activities and competitions."
            },
            {
                img:'img/Coins-tabs-v2.png',
                bigimg:'img/Economy.png',
                name: 'Economy',
                descr: "Learning from world-leading academics and practitioners, you'll not only receive an outstanding grounding in the theory of law, but wyou will be able to understand how those principles are applied in practice through a range of student-led activities and competitions."
            },
            {
                img:'img/Medicine-tabs-v2.png',
                bigimg:'img/Medicine.png',
                name: 'Medicine',
                descr: "Learning from world-leading academics and practitioners, you'll not only receive an outstanding grounding in the theory of law, but wyou will be able to understand how those principles are applied in practice through a range of student-led activities and competitions."
            },
            {
                img:'img/Computer-tabs-v2.png',
                bigimg:'img/Computer-Science.png',
                name: 'Computer Science',
                descr: "Learning from world-leading academics and practitioners, you'll not only receive an outstanding grounding in the theory of law, but wyou will be able to understand how those principles are applied in practice through a range of student-led activities and competitions."
            },
            {
                img:'img/Palette-tabs-v2.png',
                bigimg:'img/Graphic-Design.png',
                name: 'Graphic Design',
                descr: "Learning from world-leading academics and practitioners, you'll not only receive an outstanding grounding in the theory of law, but wyou will be able to understand how those principles are applied in practice through a range of student-led activities and competitions."
            },
        ]

    },
    computed:{
    },

    methods:{
        selectnavlink(link){
            setTimeout(() => this.activeNavlink = link,  150)
        },
        selectfaculty(faculty){
            setTimeout(() => this.activeFaculty = faculty,  150)
        }
    },
    
    mounted(){
        this.selectfaculty(this.facultiesList[0]);
        this.selectnavlink(this.navlinks[0]);
    }
})