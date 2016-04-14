from django import forms

class RegistrationForm(forms.Form):
    first_name = forms.CharField(label='First Name', max_length=32)
    last_name = forms.CharField(label='Last Name', max_length=32)
    grad_date = forms.DateField(label='Graduation Date')
    school = forms.CharField(label='College', max_length=32)
    major = forms.CharField(label='College Major', max_length=32)
    resume = forms.FileField()