const app = new Vue({
    el: "#app",
    data: {
        activeNavlink: {},
        navlinks: [
            {
                name: 'Home',
                arrow: true,
            },
            {
                name: 'Courses',
                arrow: true,
            },
            {
                name: 'About Us',
                arrow: false,
            },
            {
                name: 'News',
                arrow: true,
            },
            {
                name: 'Pages',
                arrow: true,
            },
            {
                name: 'Contact',
                arrow: false,
            },
            {
                name: 'Purchase',
                arrow: false,
            },
        ],
        activeFaculty: {},
        facultiesList: globalfacultiesList,
        searchInput: "",
        emailInput: "",

    },

    methods:{
        selectnavlink(link){
            setTimeout(() => this.activeNavlink = link,  150)
        },
        selectfaculty(faculty){
            setTimeout(() => this.activeFaculty = faculty,  150)
        },
        subToNewsletter(){
            if(this.emailInput){
                alert("You'll now receive our neasletters");
            }
            
        },
        searchBox(){
            if(this.searchInput){
                alert("You searched: " + this.searchInput);
            }
        }
    },
    
    mounted(){
        this.selectfaculty(this.facultiesList[0]);
        this.selectnavlink(this.navlinks[0]);
        
    },
})