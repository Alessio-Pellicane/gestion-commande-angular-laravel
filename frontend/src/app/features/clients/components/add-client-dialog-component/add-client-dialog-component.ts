import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from '@shared/models/client.model';


@Component({
  selector: 'app-add-client-dialog-component',
  imports: [ReactiveFormsModule],
  templateUrl: './add-client-dialog-component.html',
  styleUrl: './add-client-dialog-component.scss'
})
export class AddClientDialogComponent implements OnInit {
  private dialogRef = inject(MatDialogRef<AddClientDialogComponent>);
  private data = inject(MAT_DIALOG_DATA) as Client | null;
  protected clientForm!: FormGroup;

  protected client: Client = this.data ?? new Client(0, '', '', new Date(), '', '');



  ngOnInit(): void {
    console.log('(AddClientDialogComponent - ngOnInit) Initialisation du composant...');
    this.clientForm = new FormGroup({
      nom: new FormControl(this.data?.nom ?? '', Validators.required),
      prenom: new FormControl(this.data?.prenom ?? '', Validators.required),
      email: new FormControl(this.data?.email ?? '', [Validators.email]),
      telephone: new FormControl(this.data?.telephone ?? ''),
      date_de_naissance: new FormControl(this.data?.date_de_naissance ?? '')
    });
  }


  // INPUT: /
  // PROCESS: Ferme la boîte de dialogue sans enregistrer
  // OUTPUT: /
  onCancel(): void {
    this.dialogRef.close();
  }

  // INPUT: /
  // PROCESS: Ferme la boîte de dialogue en renvoyant le client créé/modifié
  // OUTPUT: /
  onSave(): void {
    if (this.clientForm.valid) {
      console.log('(AddClientDialogComponent - onSave) Formulaire valide, fermeture de la boîte de dialogue avec les données du client...');
      this.dialogRef.close(this.clientForm.value);
    }
  }
}
