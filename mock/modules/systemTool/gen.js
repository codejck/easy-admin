const { genList } = require(`${process.cwd()}/mock/data`)
const { dateInRange } = require(`${process.cwd()}/mock/utils`)

module.exports = [{
    url: '/mock/systemTool/gen/list',
    type: 'get',
    response(req) {
        let params = req.query
        let data = genList
        return {
            code: 200,
            msg: '操作成功',
            total: genList.length,
            data
        }
    }
}, {
    url: '/mock/systemTool/gen/getItem/:id',
    type: 'get',
    response(req) {
        let n = parseInt(req.params.id)
        return {
            code: 200,
            msg: '操作成功',
            data: genList.find(item => item.id === n)
        }
    }
}, {
    url: '/mock/systemTool/gen/delete',
    type: 'delete',
    response(req) {
        genList.forEach((item, index) => req.body.includes(item.id) && genList.splice(index, 1))
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}, {
    url: '/mock/systemTool/gen/previewCode/:id',
    type: 'get',
    response(req) {
        let n = parseInt(req.params.id)
        return {
            code: 200,
            msg: '操作成功',
            data: [{
                name: 'vue',
                isPenultimate: true,
                children: [{
                    name: 'education',
                    children: [{
                        name: 'views',
                        children: [{
                            name: 'student.vue',
                            code: `<template>
                                	<cl-crud ref="Crud">
                                		<!-- 新增、编辑 -->
                                		<cl-upsert ref="Upsert" />
                                	</cl-crud>
                                </template>`
                        }, {
                            name: 'course.vue',
                            code: ``
                        }, {
                            name: 'teacher.vue',
                            code: ``
                        }, {
                            name: 'class.vue',
                            code: ``
                        }]
                    }, {
                        name: 'components',
                        children: [{
                            name: 'teacher-select.vue',
                            code: ``
                        }, {
                            name: 'class-select.vue',
                            code: `<template>
	                                <cl-select-table
		                                v-model="value"
		                                :title="t('选择班级信息')"
		                                :service="service.education.class"
		                                :columns="columns"
		                                :multiple="multiple"
		                                :dict='{"text":"name"}'
		                                pickerType="text"
	                                />
                                </template>`
                        }]
                    }]
                }]
            }, {
                name: 'node',
                isPenultimate: true,
                children: [{
                    name: 'education',
                    children: []
                }]
            }, ]
        }
    }
}]