const HashmiTestTemplate = `
 Name : {{ supplier_id | capitalize }}
<select id="supplier_id" class='form-control' v-model='supplier_id'>
    <option value="atul">Atul</option>
    <option value="niklesh">Niklesh</option>
    <option value="sachin">Sachin</option>
</select>
`

export default HashmiTestTemplate