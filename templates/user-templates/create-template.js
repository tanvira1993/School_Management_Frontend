const UserCreateTemplate = `
<div>

	<section class="content-header">
	    	<h1>
	            Add User
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><router-link to="/organization/user/list"> User's List <router-link></li>
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
		                    <input  class="form-control" placeholder="Please enter user's full name" v-model="fromInput.name">
                       	</div>
                        <div class="form-group">
                            <label class="required-field">Email &nbsp</label>
                            <input type="email" class="form-control" placeholder="Please enter user's email address" v-model="fromInput.email">
                        </div>
                        <div class="form-group">
                            <label class="required-field">Password &nbsp</label>
                            <input type="password" class="form-control" placeholder="Please enter user's password" autocomplete="off" v-model="fromInput.password">
                        </div>
                        <div class="form-group">
                            <label class="required-field">Confirm Password &nbsp</label>
                            <input type="password" class="form-control" id="confirm-password" placeholder="Please confirm user's password" autocomplete="off" v-model="fromInput.confirm_password">
                        </div>
                        <div class="form-group">
                            <label class="required-field">Present Addess &nbsp</label>
                            <input class="form-control" placeholder="Please enter user's present address" v-model="fromInput.present_address">
                        </div>
                        <div class="form-group">
                            <label class="required-field">Contact Number &nbsp</label>
                            <input class="form-control" placeholder="Please enter user's contact number" v-model="fromInput.contact_no">
                        </div>
						<div class="form-group">
	                        <label class="required-field">Gender &nbsp</label>
		                    <select class="form-control" v-model="fromInput.genders_id">
		                        <option :value="null" disabled selected>Select Gender</option>
		                        <option v-for="gender in genders" v-bind:value="gender.id">{{ gender.name }}</option>
		                    </select>
	                   	</div>
                        <div class="form-group">
                            <label class="required-field">Organization &nbsp</label>
                            <select class="form-control" v-model="fromInput.organizations_id" @change="getAllOrgBranches()">
                                <option :value="null" disabled selected>Select Organization</option>
                                <option v-for="organization in organizations" v-bind:value="organization.id">{{ organization.name }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="required-field">Branch &nbsp</label>
                            <select :disabled="branches.length == 0"class="form-control" v-model="fromInput.branches_id">
                                <option :value="null" disabled selected>Select Branch</option>
                                <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="required-field">User Type &nbsp</label>
                            <select class="form-control" v-model="fromInput.user_types_id">
                                <option :value="null" disabled selected>Select User Type</option>
                                <option v-for="userType in userTypes" v-bind:value="userType.id">{{ userType.name }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="required-field">Role &nbsp</label>
                            <select class="form-control" v-model="fromInput.roles_id">
                                <option :value="null" disabled selected>Select Role</option>
                                <option v-for="role in roles" v-bind:value="role.id">{{ role.name }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="required-field">Id-Type &nbsp</label>
                            <select class="form-control" v-model="fromInput.id_types_id">
                                <option :value="null" disabled selected>Select Id-Type</option>
                                <option v-for="idType in idTypes" v-bind:value="idType.id">{{ idType.name }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="required-field">National Id &nbsp</label>
                            <input class="form-control" placeholder="Please enter user's national-id no" v-model="fromInput.nid_no">
                        </div>
                        <div class="form-group">
                            <label class="required-field">Birth Certificate &nbsp</label>
                            <input class="form-control" placeholder="Please enter user's birth-certificate no" v-model="fromInput.bc_no">
                        </div>
                        <div class="form-group">
                            <label class="required-field">Post Code &nbsp</label>
                            <input class="form-control" placeholder="Please enter user's post code" v-model="fromInput.post_code">
                        </div>
                        <div class="form-group">
                            <label class="required-field">Designation &nbsp</label>
                            <input class="form-control" placeholder="Please enter user's designation" v-model="fromInput.designation">
                        </div>
                        <div class="form-group">
                            <label class="required-field">Parmanant Addess &nbsp</label>
                            <input class="form-control" placeholder="Please enter user's Parmanant Addess" v-model="fromInput.permanent_address">
                        </div>
                        <div class="form-group">
                            <label class="required-field">Joining Date &nbsp</label>
                            <input class="form-control datepicker" placeholder="Please enter user's Joining Date" v-model="fromInput.joining_date">
                        </div>
                        <div class="form-group">
                            <label class="required-field">Birth Date &nbsp</label>
                            <input class="form-control datepicker" placeholder="Please enter user's Birth Date" v-model="fromInput.birth_date">
                        </div>
                        <div class="form-group">
                            <label class="required-field" >Image &nbsp</label>
                            <input type="file" name="image" class="form-control-file">
                        </div>
                    </div>
                    <div class="box-footer">
                        <button type="button" class="btn btn-primary btn-sm" style="background-color: #605ca8 !important" @click="createUser()">Submit</button>
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


export default UserCreateTemplate