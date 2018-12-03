var categories= ['teste', 'teste 2'];
  
var allDepartments = [
    {name: 'Recursos Humanos'},
    {name: 'User Experience Design'},
    {name: 'CRM'},
    {name: 'Negócios'}
];

var allProjects = [
    {name: 'Compra Certa - 30 anos'},
    {name: 'Next'},
    {name: 'Black Friday 2018'},
    {name: 'Pandora Rose'}
];

var allClients = [
    {name: 'Whirlpool'},
    {name: 'Pandora'},
    {name: 'Kroton'},
    {name: 'Ambev'}
];

var allTeams = [
    {name: 'Kroton team'},
    {name: 'Ambev team'},
    {name: 'Whirlpool team'},
    {name: 'Jussi Ops team'}
];

var allDocuments = [
    {name: 'Wireframes'},
    {name: 'Análise Heurística'},
    {name: 'Layout'},
    {name: 'Card Sorting'}
];

var allFileTypes = [
    {name: 'Figma'},
    {name: 'Adobe XD'},
    {name: 'Sketch'},
    {name: 'PPT'}
];

var allAuthors = [
    {name: 'Leandro Monteiro'},
    {name: 'Gabriel Feitoza'},
    {name: 'Vitor Magro'},
    {name: 'Mariana Bartholomeu'}
];


var user = {
    id: 1,
    name: 'Foo Bar',
    departments: [{name: 'Recursos Humanos'}],
    projects: [],
    clients: [],
    teams: [],
    documents: [],
    dates: [],
    fileTypes: [],
    authors: []
};


// multi Select library
 $("select").multipleSelect({
    filter: true
});


// populate select

$(".mult-select").each(function(index) {

    var allItemsName = $(this).attr('allItems');
    
    var allItems = window[allItemsName];

    console.log(allItems);

    for (var i = 0; i <= allItems.length; i++) {
        console.log(allItems[i])
        $(this).append('<option value="' + allItems[i].name + '">' + allItems[i].name + '</option>');
    }
});
