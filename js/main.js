const lista = document.getElementById('lista');

Sortable.create(lista, {
    animation: 150,
    chosenClass: "seleccionado",
    // ghostClass: "fantasma"
    dragClass: "drag",

    onEnd: () => {
        console.log('Se inserto un elemento');
    },
    group: "lista-Kombos",
    store: {
        // Guardamos el orden de la lista
        set: (Sortable) => {
            const orden = Sortable.toArray();
            localStorage.setItem(Sortable.options.group.name, orden.join('|'));
        },

        // Obtenemos el oreden de la lista
        get: (Sortable) => {
            const orden = localStorage.getItem(Sortable.options.group.name);
            return orden ? orden.split('|') : []; 
        }
    }
});