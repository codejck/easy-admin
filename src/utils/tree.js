// 数组转树
export function arrayToTree(array, func, config) {
    let tree = []
    let map = {}
    const {
        idKey = 'id',
        parentIdKey = 'parentId',
        childrenKey = 'children',
        orderKey = 'order',
        hasChildKey = 'hasChild'
    } = config ?? {}

    for (const item of array) {
        let newItem = { ...item }
        if (newItem[hasChildKey]) newItem[childrenKey] = map[newItem[idKey]]?.[childrenKey] || []
        map[newItem[idKey]] = newItem
        if (newItem[parentIdKey]) {
            let parentItem = map[newItem[parentIdKey]]
            if (parentItem) {
                parentItem[childrenKey] ||= []
                parentItem[childrenKey].push(newItem)
                parentItem[childrenKey].sort((a, b) => a[orderKey] - b[orderKey])
            } else {
                parentItem = { [childrenKey]: [newItem] }
            }
        } else {
            tree.push(newItem)
        }
    }

    tree = tree.sort((a, b) => a[orderKey] - b[orderKey])

    if (func instanceof Function) {
        function buildTree(node, parentNodes = []) {
            let _node = { ...node }
            let newNode = func(_node, [...parentNodes])
            if (node[childrenKey] instanceof Array) {
                newNode[childrenKey] = node[childrenKey].map(child => buildTree(child, [...parentNodes, node]))
            }
            return newNode
        }
        tree = tree.map(node => buildTree(node, []))
    }

    return tree
}

// 树转数组
export function treeToArray(tree, func) {
    let array = []
    let childrenKey = 'children'
    function traverse(node, parentNodes) {
        let newNode = { ...node }
        delete newNode[childrenKey]
        let newNodeMap = func ? func?.(newNode, [...parentNodes]) : newNode
        array.push(newNodeMap)
        node[childrenKey]?.forEach(child => traverse(child, [...parentNodes, node]))
    }
    tree.forEach(node => traverse(node, []))
    return array
}

// 遍历树
export function handleTree(tree, func) {
    tree.forEach(node => {
        func(node)
        if (node.children) {
            handleTree(node.children, func)
        }
    })
}

// 过滤树
export function filterTree(tree, func) {
    return tree.filter(item => func(item) && (item.children = filterTree(item.children, func)))
}

// 查找第一个叶子节点
export function findFirstLeafNode(tree) {
    for (const node of tree) {
        if (node.children && node.children.length > 0) {
            const childLeaf = findFirstLeafNode(node.children)
            if (childLeaf) {
                return childLeaf
            }
        } else {
            return node
        }
    }
}