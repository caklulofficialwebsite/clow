var progress = confirm('Selamat Datang di Cak Lul Official Website \n Apakah Anda ingin Login?');
	if (progress === true) {
		var nama = prompt('Masukkan Nama:');
			usia = prompt('Masukkan Usia:');

	var x=confirm('Apakah data ini benar? \n' + '\n nama anda : ' + nama  +"\n Usia Anda : " + usia);
		if(x === true) {
			alert('Selamat Datang '+ nama +',selamat menikmati pengalaman Browsing di Website kami:)');
		} 
		else {
			ulang = confirm('Apakah Anda ingin Login Lagi?');
		}
	}

	else {
		alert('terima kasih, Silahkan melanjutkan pengalaman Browsing di Website kami');
	}
