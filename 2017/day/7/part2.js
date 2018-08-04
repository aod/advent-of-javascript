const parser = require('./parser');

// TODO : Refactor all this
module.exports = input => {
    const parsed = parser.parse(input);
    const list = new Map(
        parsed.map(item => [item.name, item])
    );
    const filtered = new Map(
        parsed.filter(node => node.children !== null)
            .map(node => [node.name, node])
    );

    function totalWeight(node, weight = 0) {
        if (!node.children) {
            return node.weight;
        }

        let nodes = node.children.map(node => list.get(node));

        while (nodes.length) {
            weight += nodes.reduce((acc, val) => acc + val.weight, 0);

            let newNodes = [];
            for (const child of nodes) {
                if (child.children) {
                    newNodes = newNodes.concat(...child.children.map(node => list.get(node)));
                }
            }
            nodes = newNodes;
        }

        return weight;
    }

    let smallest = Infinity;
    let n = null;
    let nw = null;

    for (const [name, node] of filtered) {
        const childrenWeights = [];
        const childs = [];
        for (const child of node.children) {
            const childNode = list.get(child);
            childs.push(childNode);
            childrenWeights.push(totalWeight(childNode, childNode.weight));
        }
        const a = new Set(childrenWeights)

        if (a.size > 1) {
            if (totalWeight(node) < smallest) {
                smallest = totalWeight(node);
                nw = [...childrenWeights];
                n = node;
            }
        }
    }

    let i = 0;
    const m = new Map()
    for (const w of nw) {
        if (m.has(w)) {
            m.set(w, m.get(w) + 1)
        } else {
            m.set(w, 1);
        }
    }
    let smalelstnww = 0;
    let smallestnw = Infinity;
    for (const [w, c] of m) {
        if (c < smallestnw) {
            smallestnw = c;
            smalelstnww = w;
        }
    }

    const tmp = Array.from(m.keys()).sort((a,b) => b > a);
    const diff = tmp[0] - tmp[1];

    return list.get(n.children[nw.indexOf(smalelstnww)]).weight - diff
}
