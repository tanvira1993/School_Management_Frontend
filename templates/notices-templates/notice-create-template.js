const NoticeCreateTemplate = `
<div>

<section class="content-header">
	    	<h1>
	            Add Notice
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><router-link to="{{NoticeCreate}}"> Notices list <router-link></li>
	        </ol>
	</section>

    <section class="content">
        <div class="row">
            <!-- left column -->
            <div class="col-md-6">
                <!-- general form elements -->
                <div class="box box-primary" style="border-top-color: #605ca8 !important">
                    <div class="box-header">
                    </div>

                    <form>
                        <div class="box-body">

                            <div class="form-group">
                                <label class="required-field">Name &nbsp</label>
                                <input type="text" class="form-control" placeholder="Please enter quantity of book" v-model="newNotice.name">
                            </div>

                            <div class="form-group">
                                <label class="required-field">Description &nbsp</label>
                                <input type="text" class="form-control" placeholder="Please enter quantity of book" v-model="newNotice.description">
                            </div>

                            <div class="form-group">
                                <label class="required-field">File &nbsp</label>
                                <input type="file" @change="fileChange" class="form-control">
                            </div>

                            <div class="form-group">
                                <label class="required-field">Branch &nbsp</label>
                                <select class="form-control" v-model="newNotice.branches_id">
                                    <option disabled>Select Branch</option>
                                    <option v-for="branch in branches" :value="branch.id">{{ branch.name }}</option>
                                </select>
                            </div>
                            
                        </div>
                        <div class="box-footer">
                            <button type="button" class="btn btn-primary btn-sm" style="background-color: #605ca8 !important" @click="submit()">Submit</button>
                        </div>
                    </form>
                </div>
                <!-- /.box -->
            </div>
            <!--/.col (left) -->
        </div>
        <!-- /.row -->
    </section>

</div>
`

export default NoticeCreateTemplate