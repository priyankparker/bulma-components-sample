const storyOne = {
    // mm: true
}

const storyTwo = {
    mm: undefined
}

const storyThree = {
    // mm: true
}

console.log(
    storyOne.mm && storyOne.mm[2] && 'hello'
)

console.log(
    storyTwo.mm === undefined
)

console.log(
    typeof storyThree.mm === 'undefined'
)

const a = [1]

a.slice(2,3) //?