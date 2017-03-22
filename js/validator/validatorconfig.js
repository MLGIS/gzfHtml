function startValidate(){	
	function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));

    $('#defaultForm').bootstrapValidator({
//        live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
			/*
            firstName: {
                validators: {
                    notEmpty: {
                        message: '姓名不能为空'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: '姓名不能为空'
                    }
                }
            },
			*/
            username: {
                message: '用户名无效',
                validators: {
                    notEmpty: {
                        message: '用户名不能位空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '用户名必须大于6，小于30个字'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '用户名只能由字母、数字、点和下划线组成'
                    },
                    remote: {
                        url: '#',
                        message: '用户名不可用'
                    },
                    different: {
                        field: 'password',
                        message: '用户名和密码不能相同'
                    }
                }
            },
            email: {
                validators: {
                    emailAddress: {
                        message: '输入不是有效的电子邮件地址'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能位空'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: '两次密码不一致'
                    },
                    different: {
                        field: 'username',
                        message: '用户名和密码不能相同'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    identical: {
                        field: 'password',
                        message: '两次密码不一致'
                    },
                    different: {
                        field: 'username',
                        message: '用户名和密码不能相同'
                    }
                }
            },
            birthday: {
                validators: {
                    date: {
                        format: 'YYYY/MM/DD',
                        message: '不是合法的生日'
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: '请选择性别'
                    }
                }
            },
            'languages[]': {
                validators: {
                    notEmpty: {
                        message: '请至少选择一种语言'
                    }
                }
            },
            'programs[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 4,
                        message: '请选择两种到四种语言'
                    }
                }
            },
            captcha: {
                validators: {
                    callback: {
                        message: '答案错误',
                        callback: function(value, validator) {
                            var items = $('#captchaOperation').html().split(' '), sum = parseInt(items[0]) + parseInt(items[2]);
                            return value == sum;
                        }
                    }
                }
            }
        }
    });

    // Validate the form manually
    $('#validateBtn').click(function() {
        $('#defaultForm').bootstrapValidator('validate');
    });

    $('#resetBtn').click(function() {
        $('#defaultForm').data('bootstrapValidator').resetForm(true);
    });
}