package com.wexad.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Employee", uniqueConstraints = {
        @UniqueConstraint(name = "unique_contraint_firstname_lastname", columnNames = {"firstName", "lastName"})
})
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(unique = true)
    private String email;
}
