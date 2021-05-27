const app = new Vue({
    el: "#app",
    data: {
        activeNavlink: {},
        navlinks: [
            {
                name: 'Home',
                link: '#',

                arrow: true,
                show: false,
                dropdown: [{
                    name: 'History'
                },{
                    name: 'Location'
                },{
                    name: 'Info', 
                }],
            },
            {
                name: 'Courses',
                link: '#',

                arrow: true,
                show: false,
                dropdown: [{
                    name: 'Law Faculty'
                },{
                    name: 'Economy'
                },{
                    name: 'Medicine'
                },{
                    name: 'Computer Science'
                },{
                    name: 'Graphic Design'
                }],
            },
            {
                name: 'About Us',
                link: '#',

                arrow: false,
                dropdown: {

                },
            },
            {
                name: 'News',
                link: '#',

                arrow: true,
                dropdown: [{
                    name: 'Latest'
                },{
                    name: 'Students'
                },{
                    name: 'Results'
                }],
            },
            {
                name: 'Pages',
                link: '#',

                arrow: true,
                dropdown: [{
                    name: 'Student Portal'
                },{
                    name: 'Subscribe'
                },{
                    name: 'Webinary'
                },{
                    name: 'Crypto'
                }],
            },
            {
                name: 'Contact',
                link: '#',

                arrow: false,
                dropdown: {

                },
            },
            {
                name: 'Purchase',
                link: '#',

                arrow: false,
                dropdown: {

                },
            },
        ],
        activeFaculty: {},
        facultiesList: globalfacultiesList,
        searchInput: "",
        emailInput: "",

    },

    methods: {
        Startselectnavlink(link) {
            setTimeout(() => {
                this.activeNavlink = link;
            }, 150)
        },
        selectnavlink(link) {
            setTimeout(() => {
                this.activeNavlink = link;
                this.navlinks.forEach(x => {
                    x.show = false;
                });
                if(link.arrow){
                    link.show = true;
                }
            }, 150)
        },
        selectfaculty(faculty) {
            setTimeout(() => this.activeFaculty = faculty, 150)
        },
        subToNewsletter() {
            if (this.emailInput) {
                alert("You'll now receive our neasletters");
            }

        },
        searchBox() {
            if (this.searchInput) {
                alert("You searched: " + this.searchInput);
            }
        }
    },

    mounted() {
        this.selectfaculty(this.facultiesList[0]);
        this.Startselectnavlink(this.navlinks[0]);

    },
})