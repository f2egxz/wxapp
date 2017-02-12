import http from '../../util/http'

const mockFunc = jest.fn()
const options = {
	url:'./userdata',
}


test('http try test',()=>{
	const wx = { request: mockFunc}
	expect(http(options))
})
test('http catch test',()=>{
	const fetch = mockFunc
	expect(http(options))
})