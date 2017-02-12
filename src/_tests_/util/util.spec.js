import { randomString,orderNum } from '../../util/util'

describe('utils test',()=>{
	it('randomString test',()=>{
		expect(randomString(10).length).toBe(10)
	})
})