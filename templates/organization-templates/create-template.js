const OrganizationCreateTemplate = `

<div class="col-md-6">
<!-- general form elements -->
<div class="box box-primary">
<div class="box-header with-border">
<h3 class="box-title">Organization</h3>
</div>
<!-- /.box-header -->
<!-- form start -->
<div >
<div class="box-body">
<div class="form-group">
<label for="title">Title</label>
<input type="text" class="form-control" id="title" v-model="organization.title">
</div>


</div>
<!-- /.box-body -->

<div class="box-footer">
<button class="btn btn-primary" @click.prevent="submit()">Submit</button>
</div>
</div>

<button class="btn btn-primary" @click.prevent="test()">test</button>
</div>


</div>

`

export default OrganizationCreateTemplate