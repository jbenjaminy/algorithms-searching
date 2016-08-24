'use strict'

class BinaryTree {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
	// Best, average & worst cases: O(n)
	dfs(values) {
		values = values || []
		if (this.left) {
			values = this.left.dfs(values)
		}
		values.push(this.value)

		if (this.right) {
			values = this.right.dfs(values)
		}
		return values
		//  This is an in-order search, where the left-branch is visited, then the node itselft, then the right branch. If the node is handled before the branches then this is known as pre-ordering. And if the node is handled after the branches then this is known as post-ordering. Each ordering will give you the node values in a different order.
	}

	// Also O(n)
	bfs(values) {
		values = values || []

		// first in, first out
		let queue = [this]

		while (queue.length) {
			let node = queue.shift()
			values.push(node.value)

			if (node.left) {
				queue.push(node.left)
			}

			if (node.right) {
				queue.push(node.right)
			}
		}
		return values
	}
}


module.exports = BinaryTree;
