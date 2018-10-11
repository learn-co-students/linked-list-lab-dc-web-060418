function getName(node) {
    return node.name
}

function headNode(linkedList, collection){
    return collection[linkedList]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
    let node = collection[linkedList]
    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }    
    return node
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList
    }else{
        let node = collection[linkedList]
        for (let i = 0; i < index-1; i++) {
            node = next(node, collection)
        }
        return node.next
    }
}

function indexAt(node, collection, linkedList) {
    let done = false
    let index = 0
    let search = collection[linkedList]

    while (!done) {
        if (search===node) {
            done=true;
        }else{
            search = next(search,collection)
            index+=1
        }
    }
    return index
}

function insertNodeAt(index, key, linkedList, collection) {
    if (index === 0) {
        collection[key].next = linkedList
    }else{
        let before = nodeAt(index-1,linkedList, collection)
        let after = addressAt(index, linkedList, collection)

        before.next = key
        collection[key].next = after
        
    }
}

function deleteNodeAt(index, linkedList, collection) {
    let next = addressAt(index+1,linkedList,collection)
    let previous = nodeAt(index-1,linkedList,collection)
    previous.next = next
    
}