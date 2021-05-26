const app = new Vue({
    el: "#app",
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
        facultiesList: globalfacultiesList,

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
        
    },
})