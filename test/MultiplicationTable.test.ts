import { MultiplicationTable } from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe(`2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16`)
  })

  it('should return nothing of (4, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 4
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return nothing of (0, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('out of range')
  })
})
