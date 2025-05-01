import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  success(message: string, title: string = 'Success') {
    this.Toast.fire({
      icon: 'success',
      title: `${title}: ${message}`
    });
  }

  error(message: string, title: string = 'Error') {
    this.Toast.fire({
      icon: 'error',
      title: `${title}: ${message}`
    });
  }

  info(message: string, title: string = 'Info') {
    this.Toast.fire({
      icon: 'info',
      title: `${title}: ${message}`
    });
  }

  warning(message: string, title: string = 'Warning') {
    this.Toast.fire({
      icon: 'warning',
      title: `${title}: ${message}`
    });
  }
}
