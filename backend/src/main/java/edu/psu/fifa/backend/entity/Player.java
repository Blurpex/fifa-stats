package edu.psu.fifa.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false, length = 22)
    private String name;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "nationality", nullable = false, length = 24)
    private String nationality;

    @Column(name = "overall", nullable = false)
    private Integer overall;

    @Column(name = "potential")
    private Integer potential;

    @Column(name = "club", length = 37)
    private String club;

    @Column(name = "value")
    private Integer value;

    @Column(name = "wage")
    private Integer wage;

    @Column(name = "preferred_foot", length = 5)
    private String preferredFoot;

    @Column(name = "skill_moves")
    private Integer skillMoves;

    @Column(name = "position", length = 3)
    private String position;

    @Column(name = "height")
    private Integer height;

    @Column(name = "weight")
    private Integer weight;

    @Column(name = "release_clause")
    private Integer releaseClause;
}
