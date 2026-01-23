var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;

    // Min Heap implemented as functions
    const heap = [];

    const swap = (i, j) => {
        [heap[i], heap[j]] = [heap[j], heap[i]];
    };

    const bubbleUp = (index) => {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (heap[parent].val <= heap[index].val) break;
            swap(parent, index);
            index = parent;
        }
    };

    const bubbleDown = (index) => {
        const n = heap.length;
        while (true) {
            let smallest = index;
            const left = index * 2 + 1;
            const right = index * 2 + 2;

            if (left < n && heap[left].val < heap[smallest].val) {
                smallest = left;
            }
            if (right < n && heap[right].val < heap[smallest].val) {
                smallest = right;
            }
            if (smallest === index) break;

            swap(index, smallest);
            index = smallest;
        }
    };

    const push = (node) => {
        heap.push(node);
        bubbleUp(heap.length - 1);
    };

    const pop = () => {
        if (heap.length === 1) return heap.pop();
        const min = heap[0];
        heap[0] = heap.pop();
        bubbleDown(0);
        return min;
    };

    // Initialize heap
    for (let node of lists) {
        if (node !== null) push(node);
    }

    const dummy = new ListNode(0);
    let current = dummy;

    while (heap.length > 0) {
        const node = pop();
        current.next = node;
        current = current.next;

        if (node.next !== null) {
            push(node.next);
        }
    }

    return dummy.next;
};
